-- ============================================
-- SMARTPROCURE DATABASE SCHEMA
-- PostgreSQL
-- ============================================

-- ============================================
-- 1. USERS
-- Stores farmers and system administrators
-- ============================================

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    role VARCHAR(20) NOT NULL DEFAULT 'FARMER',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT users_role_check
        CHECK (role IN ('FARMER', 'CENTRE_ADMIN', 'SYSTEM_ADMIN'))
);


-- ============================================
-- 2. CROPS
-- Stores available crops
-- ============================================

CREATE TABLE crops (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- ============================================
-- 3. PROCUREMENT CENTRES
-- Stores procurement centre information
-- ============================================

CREATE TABLE procurement_centres (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,

    latitude DECIMAL(10,7),
    longitude DECIMAL(10,7),

    capacity INTEGER NOT NULL DEFAULT 100,
    processing_rate INTEGER NOT NULL DEFAULT 10,

    open_time TIME,
    close_time TIME,

    status VARCHAR(20) NOT NULL DEFAULT 'OPEN',

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT centre_capacity_check
        CHECK (capacity > 0),

    CONSTRAINT centre_processing_rate_check
        CHECK (processing_rate > 0),

    CONSTRAINT centre_status_check
        CHECK (status IN ('OPEN', 'CLOSED', 'BUSY'))
);


-- ============================================
-- 4. CENTRE CROPS
-- Which crops each procurement centre accepts
-- ============================================

CREATE TABLE centre_crops (
    centre_id INTEGER NOT NULL,
    crop_id INTEGER NOT NULL,

    PRIMARY KEY (centre_id, crop_id),

    CONSTRAINT fk_centre_crops_centre
        FOREIGN KEY (centre_id)
        REFERENCES procurement_centres(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_centre_crops_crop
        FOREIGN KEY (crop_id)
        REFERENCES crops(id)
        ON DELETE CASCADE
);


-- ============================================
-- 5. SCHEDULES
-- Stores procurement centre schedules
-- ============================================

CREATE TABLE schedules (
    id SERIAL PRIMARY KEY,

    centre_id INTEGER NOT NULL,

    schedule_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,

    capacity INTEGER NOT NULL,
    available_slots INTEGER NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_schedules_centre
        FOREIGN KEY (centre_id)
        REFERENCES procurement_centres(id)
        ON DELETE CASCADE,

    CONSTRAINT schedule_capacity_check
        CHECK (capacity > 0),

    CONSTRAINT schedule_available_slots_check
        CHECK (available_slots >= 0),

    CONSTRAINT schedule_time_check
        CHECK (end_time > start_time),

    CONSTRAINT schedule_slots_capacity_check
        CHECK (available_slots <= capacity)
);


-- ============================================
-- 6. TOKENS
-- Farmer's booking/token for procurement
-- ============================================

CREATE TABLE tokens (
    id SERIAL PRIMARY KEY,

    farmer_id INTEGER NOT NULL,
    centre_id INTEGER NOT NULL,
    schedule_id INTEGER NOT NULL,
    crop_id INTEGER,

    token_number INTEGER NOT NULL,

    status VARCHAR(30) NOT NULL DEFAULT 'BOOKED',

    booking_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_tokens_farmer
        FOREIGN KEY (farmer_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_tokens_centre
        FOREIGN KEY (centre_id)
        REFERENCES procurement_centres(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_tokens_schedule
        FOREIGN KEY (schedule_id)
        REFERENCES schedules(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_tokens_crop
        FOREIGN KEY (crop_id)
        REFERENCES crops(id)
        ON DELETE SET NULL,

    CONSTRAINT token_number_check
        CHECK (token_number > 0),

    CONSTRAINT token_status_check
        CHECK (
            status IN (
                'BOOKED',
                'WAITING',
                'CALLED',
                'PROCESSING',
                'COMPLETED',
                'CANCELLED'
            )
        )
);


-- ============================================
-- 7. QUEUE ENTRIES
-- Stores the live queue for each token
-- ============================================

CREATE TABLE queue_entries (
    id SERIAL PRIMARY KEY,

    token_id INTEGER NOT NULL UNIQUE,
    centre_id INTEGER NOT NULL,

    position INTEGER,

    status VARCHAR(30) NOT NULL DEFAULT 'WAITING',

    joined_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    called_at TIMESTAMP,
    completed_at TIMESTAMP,

    CONSTRAINT fk_queue_token
        FOREIGN KEY (token_id)
        REFERENCES tokens(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_queue_centre
        FOREIGN KEY (centre_id)
        REFERENCES procurement_centres(id)
        ON DELETE CASCADE,

    CONSTRAINT queue_position_check
        CHECK (position IS NULL OR position > 0),

    CONSTRAINT queue_status_check
        CHECK (
            status IN (
                'WAITING',
                'CALLED',
                'PROCESSING',
                'COMPLETED',
                'CANCELLED'
            )
        )
);


-- ============================================
-- 8. NOTIFICATIONS
-- Stores notifications sent to farmers
-- ============================================

CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,

    user_id INTEGER NOT NULL,
    token_id INTEGER,

    title VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,

    type VARCHAR(30),

    is_read BOOLEAN NOT NULL DEFAULT FALSE,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_notifications_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_notifications_token
        FOREIGN KEY (token_id)
        REFERENCES tokens(id)
        ON DELETE SET NULL
);


-- ============================================
-- INDEXES
-- Improve database query performance
-- ============================================

CREATE INDEX idx_tokens_farmer
    ON tokens(farmer_id);

CREATE INDEX idx_tokens_centre
    ON tokens(centre_id);

CREATE INDEX idx_tokens_schedule
    ON tokens(schedule_id);

CREATE INDEX idx_queue_centre
    ON queue_entries(centre_id);

CREATE INDEX idx_queue_status
    ON queue_entries(status);

CREATE INDEX idx_notifications_user
    ON notifications(user_id);

CREATE INDEX idx_schedules_centre_date
    ON schedules(centre_id, schedule_date);


-- ============================================
-- SCHEMA COMPLETE
-- ============================================

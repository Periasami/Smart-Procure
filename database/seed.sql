-- ============================================
-- SMARTPROCURE DEMO / SAMPLE DATA
-- ============================================

-- CROPS
INSERT INTO crops (name) VALUES
('Rice'),
('Wheat'),
('Maize'),
('Sugarcane'),
('Groundnut');


-- USERS
INSERT INTO users (name, phone, password_hash, role) VALUES
('Ravi Kumar', '9876543210', 'demo_hash_1', 'FARMER'),
('Priya Devi', '9876543211', 'demo_hash_2', 'FARMER'),
('Suresh Kumar', '9876543212', 'demo_hash_3', 'FARMER'),
('Centre Admin', '9876543213', 'demo_hash_4', 'CENTRE_ADMIN');


-- PROCUREMENT CENTRES
INSERT INTO procurement_centres
(name, latitude, longitude, capacity, processing_rate, open_time, close_time, status)
VALUES
('Tambaram Procurement Centre',
 12.9249, 80.1000, 100, 10, '08:00', '18:00', 'OPEN'),

('Chromepet Procurement Centre',
 12.9516, 80.1462, 80, 8, '08:00', '17:00', 'OPEN'),

('Pallavaram Procurement Centre',
 12.9675, 80.1491, 120, 12, '07:30', '18:30', 'OPEN');


-- CENTRE-CROP MAPPING
INSERT INTO centre_crops (centre_id, crop_id)
VALUES
(1, 1),
(1, 3),
(1, 5),
(2, 1),
(2, 2),
(2, 3),
(3, 1),
(3, 4),
(3, 5);


-- SCHEDULES
INSERT INTO schedules
(centre_id, schedule_date, start_time, end_time, capacity, available_slots)
VALUES
(1, CURRENT_DATE, '08:00', '12:00', 50, 35),
(1, CURRENT_DATE, '13:00', '18:00', 50, 42),
(2, CURRENT_DATE, '08:00', '12:00', 40, 25),
(2, CURRENT_DATE, '13:00', '17:00', 40, 30),
(3, CURRENT_DATE, '07:30', '12:30', 60, 45);


-- TOKENS
INSERT INTO tokens
(farmer_id, centre_id, schedule_id, crop_id, token_number, status)
VALUES
(1, 1, 1, 1, 101, 'WAITING'),
(2, 1, 1, 1, 102, 'PROCESSING'),
(3, 2, 3, 3, 201, 'BOOKED');


-- QUEUE ENTRIES
INSERT INTO queue_entries
(token_id, centre_id, position, status)
VALUES
(1, 1, 1, 'WAITING'),
(2, 1, 2, 'PROCESSING');


-- NOTIFICATIONS
INSERT INTO notifications
(user_id, token_id, title, message, type)
VALUES
(1, 1,
 'Token Confirmed',
 'Your token 101 has been successfully booked.',
 'TOKEN'),

(2, 2,
 'Processing Started',
 'Your token 102 is currently being processed.',
 'QUEUE'),

(3, 3,
 'Booking Confirmed',
 'Your token 201 has been successfully booked.',
 'TOKEN');
import numpy as np
import pandas as pd

def generate_procurement_data(n_samples=2000, seed=42):
    np.random.seed(seed)
    
    # Core operational features
    queue_length = np.random.randint(0, 50, size=n_samples)
    processing_rate = np.random.uniform(2.0, 10.0, size=n_samples)  # farmers processed per counter per hour
    active_counters = np.random.randint(1, 6, size=n_samples)
    capacity = np.random.randint(30, 100, size=n_samples)
    current_arrivals = np.random.randint(0, 15, size=n_samples)
    
    # Time features
    hour = np.random.randint(8, 18, size=n_samples)  # 8 AM to 6 PM procurement hours
    day_of_week = np.random.randint(0, 7, size=n_samples)
    
    # Token dynamics
    number_of_tokens = queue_length + np.random.randint(0, 20, size=n_samples)
    completed_tokens = np.maximum(0, number_of_tokens - queue_length)
    
    # Realistic wait time formula (in minutes) with noise
    service_capacity_per_hour = active_counters * processing_rate
    base_wait_hours = queue_length / np.maximum(service_capacity_per_hour, 0.5)
    
    # Peak hour pressure multiplier (10 AM - 2 PM heavier wait)
    peak_factor = np.where((hour >= 10) & (hour <= 14), 1.15, 1.0)
    
    # Target calculation
    wait_minutes = (base_wait_hours * 60) * peak_factor
    noise = np.random.normal(loc=0, scale=3.0, size=n_samples)  # random variation
    waiting_time_minutes = np.maximum(0, wait_minutes + noise)
    
    df = pd.DataFrame({
        'queue_length': queue_length,
        'processing_rate': np.round(processing_rate, 2),
        'active_counters': active_counters,
        'capacity': capacity,
        'current_arrivals': current_arrivals,
        'hour': hour,
        'day_of_week': day_of_week,
        'number_of_tokens': number_of_tokens,
        'completed_tokens': completed_tokens,
        'waiting_time_minutes': np.round(waiting_time_minutes, 2)
    })
    
    df.to_csv('data/development_dataset.csv', index=False)
    print(f"Dataset successfully created with {len(df)} rows.")
    print("\nFirst 5 rows:")
    print(df.head())
    print("\nTarget Summary Statistics:")
    print(df['waiting_time_minutes'].describe())

if __name__ == "__main__":
    generate_procurement_data()
import json
import joblib
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from xgboost import XGBRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

def add_derived_features(df):
    df = df.copy()
    service_capacity = np.maximum(df['active_counters'] * df['processing_rate'], 0.1)
    df['queue_pressure'] = df['queue_length'] / service_capacity
    df['utilization_rate'] = df['queue_length'] / np.maximum(df['capacity'], 1.0)
    df['tokens_per_counter'] = df['queue_length'] / np.maximum(df['active_counters'], 1.0)
    return df

def train_and_evaluate():
    # Load dataset
    df = pd.read_csv('data/development_dataset.csv')
    
    # Feature engineering
    df = add_derived_features(df)
    
    X = df.drop(columns=['waiting_time_minutes'])
    y = df['waiting_time_minutes']
    
    # Train (70%), Val (15%), Test (15%)
    X_train, X_temp, y_train, y_temp = train_test_split(X, y, test_size=0.30, random_state=42)
    X_val, X_test, y_val, y_test = train_test_split(X_temp, y_temp, test_size=0.50, random_state=42)
    
    models = {
        'Linear Regression (Baseline)': LinearRegression(),
        'Random Forest': RandomForestRegressor(n_estimators=100, random_state=42),
        'XGBoost': XGBRegressor(n_estimators=100, learning_rate=0.1, max_depth=5, random_state=42)
    }
    
    results = {}
    best_model = None
    best_model_name = ""
    best_val_mae = float('inf')
    
    print("\n================ MODEL EVALUATION RESULTS ================")
    print(f"{'Model':<30} | {'MAE (min)':<10} | {'RMSE':<10} | {'R²':<10}")
    print("-" * 70)
    
    for name, model in models.items():
        model.fit(X_train, y_train)
        preds = model.predict(X_val)
        
        # Output safeguard for evaluation
        preds = np.maximum(0, preds)
        
        mae = mean_absolute_error(y_val, preds)
        rmse = np.sqrt(mean_squared_error(y_val, preds))
        r2 = r2_score(y_val, preds)
        
        results[name] = {'MAE': round(mae, 3), 'RMSE': round(rmse, 3), 'R2': round(r2, 3)}
        print(f"{name:<30} | {mae:<10.3f} | {rmse:<10.3f} | {r2:<10.3f}")
        
        if mae < best_val_mae:
            best_val_mae = mae
            best_model = model
            best_model_name = name
            
    print("=" * 70)
    print(f"\nBest Model Selected: {best_model_name} with Validation MAE: {best_val_mae:.3f} mins")
    
    # Save best model and metadata
    joblib.dump(best_model, 'models/wait_time_model.joblib')
    
    metadata = {
        'best_model': best_model_name,
        'features': list(X.columns),
        'validation_metrics': results[best_model_name]
    }
    
    with open('models/metadata.json', 'w') as f:
        json.dump(metadata, f, indent=2)
        
    print("Saved model to 'models/wait_time_model.joblib' and metadata to 'models/metadata.json'.")

if __name__ == "__main__":
    train_and_evaluate()
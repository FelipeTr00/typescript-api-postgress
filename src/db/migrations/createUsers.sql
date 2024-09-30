CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, password) VALUES
('Alice Smith', 'alice@example.com', 'password123'),
('Bob Johnson', 'bob@example.com', 'password456'),
('Carol White', 'carol@example.com', 'password789');

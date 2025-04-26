CREATE DATABASE job_portal;

USE job_portal;

CREATE TABLE jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL
);

INSERT INTO jobs (title, company, location) 
VALUES
('Software Developer', 'TechCorp', 'San Francisco'),
('Data Analyst', 'DataLab', 'New York'),
('UI/UX Designer', 'Designify', 'Los Angeles'),
('Marketing Specialist', 'MarketPro', 'Chicago'),
('Product Manager', 'InnoTech', 'Seattle');

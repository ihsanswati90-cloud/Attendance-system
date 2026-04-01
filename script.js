body {
    font-family: 'Arial', sans-serif;
    background: #f0f2f5;
    display: flex;
    justify-content: center;
    padding: 30px;
}

.container {
    background: white;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
    width: 500px;
}

h1 {
    text-align: center;
    color: #333;
}

p#date {
    text-align: center;
    font-weight: bold;
    color: #555;
}

.input-area {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

input[type="text"] {
    width: 70%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    padding: 10px 15px;
    background: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #218838;
}

table {
    width: 100%;
    border-collapse: collapse;
}

table th, table td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
}

button.status-btn {
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

button.present {
    background: #28a745;
    color: white;
}

button.absent {
    background: #dc3545;
    color: white;
}

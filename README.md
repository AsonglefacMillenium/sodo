run the backend

backend .env 

example 
DB_HOST="127.0.0.1"
DB_USER="postgres"
DB_PASS=your_db_password
DB_NAME="sodo_db"
JWT_SECRET=your_jwt_secret_key 
PORT="5000"
NODE_ENV="development"


# cd backend
# npm install
# npm run dev

backend runs on http://localhost:5000



run the frontend

frontend .env 

NEXT_PUBLIC_API_URL="http://localhost:5000"

# cd frontend
# npm install
# npm run dev

frontend runs on http://localhost:3000

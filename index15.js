import express from 'express'
import jwt from 'jsonwebtoken'
const app=express()
const SECRET="lpu"
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiamhvbkBlbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzNDA5OSwiZXhwIjoxNzcxODM3Njk5fQ.KOFW4yiK9yGyesyGcgt5R3NJbSnE3KkIk3LFit9tGio"
const user=jwt.verify(token,SECRET)
console.log(user)

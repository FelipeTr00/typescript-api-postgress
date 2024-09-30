import { Request, Response } from 'express';
import pool from '../db/database';
import { User } from '../entities/User';

class UserController {
  // Método para listar todos os usuários
  static async index(req: Request, res: Response) {
    try {
      const result = await pool.query('SELECT * FROM users');
      const users = result.rows.map((row: any) => {
        return new User(row.id, row.name, row.email, row.password, row.created_at);
      });
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }

  // Método para criar um novo usuário
  static async store(req: Request, res: Response) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const result = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, password]
      );

      const newUser = new User(
        result.rows[0].id,
        result.rows[0].name,
        result.rows[0].email,
        result.rows[0].password,
        result.rows[0].created_at
      );

      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
}

export default UserController;

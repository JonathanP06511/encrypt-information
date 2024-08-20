/**
 * @openapi
 * /apiencrypt/{mail}/{password}:
 *   get:
 *     summary: Encrypt an email and password
 *     parameters:
 *       - in: path
 *         name: mail
 *         required: true
 *         schema:
 *           type: string
 *           example: 'example@example.com'
 *       - in: path
 *         name: password
 *         required: true
 *         schema:
 *           type: string
 *           example: 'password123'
 *     responses:
 *       200:
 *         description: Encrypted email and password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mail:
 *                   type: string
 *                   description: Encrypted email in hexadecimal format
 *                 password:
 *                   type: string
 *                   description: Encrypted password in hexadecimal format
 *       500:
 *         description: Server error
 */
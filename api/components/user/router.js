const express = require("express");
const response = require("../../../router/network");
const Controller = require("./index");

const router = express.Router();

/**
 * Obtiene la lista de usarios
 * @openapi
 * /api/user:
 *   get:
 *     tags:
 *       - user
 *     summary: Obtener la lista de usuarios
 *     description: "> Lista los Usuarios"
 *     responses:
 *      '200':
 *        description: Retorna la lista de todos los usarios
 *        content:
 *           application/json:
 *             schema:
 *              $ref: '#/components/schemas/user'
 *      '400':
 *         description: Error en la solicitud
 *      '404':
 *         description: Usuario no encontrado
 */
const listUsers = async (req, res) => {
  try {
    const list = await Controller.list();
    response.success(req, res, list, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
};

/**
 * Obtiene el usuario por id
 * @openapi
 * /api/user/{id}:
 *   get:
 *     tags:
 *       - user
 *     summary: Busca un usuario por id
 *     description: Recupera un usuario específica usando su id.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del post a buscar.
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       '200':
 *         description: Publicación encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       '400':
 *         description: Parámetro id_post faltante o inválido.
 *       '401':
 *         description: No autorizado. El token de autenticación es inválido o no se proporcionó.
 *       '404':
 *         description: No se encontró ninguna publicación con el id_post especificado.
 */
const getUserById = async (req, res) => {
  try {
    const user = await Controller.get(req.params.id);
    response.success(req, res, user, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
};
/**
 * Registrar un  usaurio nuevo
 * @openapi
 * /api/user:
 *    post:
 *     tags:
 *       - user
 *     summary: Registrar un nuevo usario
 *     description: Para crear un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/user'
 *     responses:
 *      '201':
 *        description: Usuario registrado exitosamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/user'
 *      '400':
 *        description: Error de validación en los datos proporcionados.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Datos de usuario inválidos"
 *      '500':
 *        description: Error interno del servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Error interno"
 */
const createUser = async (req, res) => {
  try {
    const insert = await Controller.upsert(req.body);
    response.success(req, res, insert, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
};

/**
 * Eliminar Taxonomía
 * @openapi:
 * /api/user/{id}:
 *    delete:
 *      tags:
 *        - user
 *      summary: "Eliminar usuario"
 *      description: Elimina un usario
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Id de Usurio a eliminar
 *         schema:
 *           type: string
 *      responses:
 *        '200':
 *          description: Retorna el usario creado y el status.
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *        '400':
 *          description: Solicitud inválida
 *          content:
 *            application/json:
 *              example:
 *                 message: "La solicitud contiene datos inválidos"
 *        '404':
 *          description: Recurso no encontrado
 *          content:
 *            application/json:
 *              example:
 *                message: "El recurso solicitado no fue encontrado"
 *        '500':
 *          description: Error interno del servidor
 *          content:
 *            application/json:
 *              example:
 *                message: "Ha ocurrido un error interno en el servidor"
 */
const deletedUser = async (req, res) => {
  try {
    const dell = await Controller._delete(req.params.id);
    response.success(req, res, dell, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
};

router.get("/", listUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/:id", deletedUser);

module.exports = router;

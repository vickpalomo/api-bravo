# Bravo Challenges

node version **v16.18.0**

Bravo Challenges.

## How to Run

1. Clonar proyecto
* `git clone git@github.com:vickpalomo/api-bravo.git`

2. Navegar al directorio raiz del proyecto
* `cd api-bravo`

3. Renombrar el archivo .env.example a .env
* `mv .env.example .env`

3. Ejecutar para construir la imagen y levantar el servicio en local
* `docker-compose up -d --build`

4. Revisar logs
* `docker logs -f --tail 10 container_id_service`


## Documentation
#### El servicio esta hosteado usando render.com,
* `http://localhost:3000/api-docs`
* `https://api-bravo.onrender.com/api-docs/`

## Api keys para probar el servicio
#### El rate limit que tiene el servicio son 5 peticiones por hora
`42IuTguij6KMv7KTV8MppveAkF6HGAC024d7Z4nKvNkMdKC7jSF3Aas0AitMqwer`
`42IuTguij6KMv7KTV8MppveAkF6HGAC024d7Z4nKvNkMdKC7jSF3Aas0AitMvcqC`
`42IuTguij6KMv7KTV8MppveAkF6HGAC024d7Z4nKvNkMdKC7jSF3Aas0Ai12wev0`


## Para correr los test de integracion
`npm run test`

## CD/CI
#### Se uso github actions para deployar el servicio de forma automatica a render.com



## Technologies and Dependencies
- [Node JS](https://nodejs.org/en/)
- [Supabase - Base de datos](https://supabase.com/)
- [Render - Host](https://render.com/)


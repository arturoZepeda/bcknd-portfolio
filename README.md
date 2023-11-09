# bcknd-portfolio
## Documentación de la API

### Acerca de
#### Obtener información acerca de mí
*GET* `/about`

Devuelve información acerca de mí.

**Respuesta**
- 200 OK en caso de éxito

#### Actualizar información acerca de mí
*PUT* `/about`

Actualiza la información acerca de mí.

**Parámetros**
- nombre (cadena): El nombre.
- apellido (cadena): El apellido.
- titulo (arreglo de cadenas): Los títulos.
- descripcion (cadena): La descripción.
- correo (cadena): El correo electrónico.
- telefono (número): El número de teléfono.
- identificador (cadena): El identificador.

**Respuesta**
- 200 OK en caso de éxito

### Habilidades
#### Obtener habilidades
*GET* `/skills`

Devuelve una lista de habilidades.

**Respuesta**
- 200 OK en caso de éxito

#### Agregar habilidad
*POST* `/skills`

Agrega una habilidad.

**Parámetros**
- nombre (cadena): El nombre de la habilidad.
- porcentaje (número): El porcentaje de la habilidad.
- descripcion (cadena): La descripción de la habilidad.
- fechaDesde (fecha): La fecha desde la que se tiene la habilidad.

**Respuesta**
- 200 OK en caso de éxito

### Experiencia
#### Obtener experiencia
*GET* `/experience`

Devuelve una lista de experiencias.

**Respuesta**
- 200 OK en caso de éxito

#### Agregar experiencia
*POST* `/experience`

Agrega una experiencia.

**Parámetros**
- puesto (cadena): El puesto.
- empresa (cadena): La empresa.
- descripcion (cadena): La descripción.
- fechaDesde (fecha): La fecha desde la que se tiene la experiencia.
- fechaHasta (fecha): La fecha hasta la que se tiene la experiencia.

**Respuesta**
- 200 OK en caso de éxito

### Proyectos
#### Obtener proyectos
*GET* `/projects`

Devuelve una lista de proyectos.

**Respuesta**
- 200 OK en caso de éxito

#### Agregar proyecto
*POST* `/projects`

Agrega un proyecto.

**Parámetros**
- nombre (cadena): El nombre del proyecto.
- descripcion (cadena): La descripción del proyecto.
- tecnologias (arreglo de cadenas): Las tecnologías utilizadas en el proyecto.
- fechaDesde (fecha): La fecha desde la que se tiene el proyecto.
- fechaHasta (fecha): La fecha hasta la que se tiene el proyecto.
- url (cadena): La URL del proyecto.

**Respuesta**
- 200 OK en caso de éxito
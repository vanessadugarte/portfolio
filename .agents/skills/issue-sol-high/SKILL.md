---
name: issue-sol-high
description: "Resuelve de principio a fin un issue de GitHub identificado como #123 o 123: interpreta la especificación, crea o retoma su rama según las reglas del repositorio, implementa y valida la solución, realiza una revisión de código previa al push, crea commits explicativos y abre el PR contra la rama base correcta. Úsalo cuando el usuario pida implementar o solucionar un issue, no para consultas o revisiones de solo lectura."
---

# Issue Sol High

Resuelve el issue completo en el repositorio actual. La invocación para solucionar el issue autoriza las mutaciones normales de este flujo: documentar la especificación en el issue cuando haga falta, crear la rama, modificar archivos dentro del alcance, crear commits, hacer push y crear o actualizar el PR. No autoriza fusionar el PR, forzar el push, borrar ramas, alterar otros issues ni incluir cambios ajenos.

## Entrada

- Acepta el número como `#123` o `123` y normalízalo a un entero positivo.
- Si no hay un único número de issue identificable, pide solamente ese dato y espera.
- Trabaja en el repositorio correspondiente al directorio actual. Verifica el remoto y la identidad del repositorio antes de consultar GitHub.

## 1. Descubrir las reglas antes de actuar

1. Lee completas las instrucciones de repositorio aplicables (`AGENTS.md` o equivalentes) y los documentos de versionamiento, contribución, pruebas y PR que existan.
2. Inspecciona el estado de Git, remotos, ramas y herramientas disponibles. Usa una integración de GitHub configurada o `gh`; no expongas credenciales.
3. Consulta el issue, sus comentarios, etiquetas, relaciones y enlaces relevantes. Confirma que existe y pertenece al repositorio actual.
4. Determina la rama base con esta prioridad:
   - regla explícita del repositorio;
   - base indicada de forma inequívoca para el issue;
   - rama de desarrollo definida por el proyecto;
   - rama predeterminada del repositorio solo si no existe otra regla.
5. Trata las instrucciones del repositorio como autoridad para nombres de ramas, verificaciones, commits y PR. Por ejemplo, si exige Git Flow y `fix/<numero>-<descripcion>`, usa exactamente ese patrón y parte de `develop`.

Detente con un diagnóstico concreto si faltan el issue, la rama base, acceso a GitHub o una regla imprescindible. No suplas una rama obligatoria inexistente con `main`.

## 2. Especificar el trabajo

Antes de implementar, convierte el issue en una especificación breve y verificable que contenga:

- objetivo;
- alcance;
- flujo o comportamiento esperado;
- criterios de aceptación observables;
- requisitos no funcionales;
- exclusiones.

Reutiliza la especificación del issue si ya cubre esos puntos. Si el proyecto exige SDD y faltan elementos, documéntalos en el lugar prescrito por el repositorio; si no existe otro lugar establecido, agrega al issue un comentario titulado `Especificación de implementación` antes de cambiar código. No amplíes el alcance: señala las suposiciones y consulta al usuario cuando una decisión de producto cambie materialmente el resultado.

## 3. Preparar la rama sin dañar trabajo existente

- Actualiza referencias remotas sin reescribir historia.
- Nunca hagas commits directos en una rama protegida o permanente.
- Crea la rama desde la referencia remota actual de la base, conforme al esquema del proyecto. Para un issue de este portafolio, el formato esperado es `fix/<numero>-<slug-corto>` desde `origin/develop`.
- Si la rama exacta ya existe, inspecciónala y retómala únicamente si corresponde al mismo issue. No la borres, reinicies ni sobrescribas.
- Si el checkout contiene cambios ajenos, consérvalos. Usa un worktree aislado cuando sea seguro y práctico; si no puede aislarse el trabajo sin riesgo, detente y explica el conflicto.
- No uses `--force`, `reset --hard`, `checkout --`, limpieza destructiva ni reescritura de commits ajenos.

## 4. Implementar y verificar

Implementa solo lo necesario para satisfacer la especificación y sigue la arquitectura y convenciones existentes. Mantén actualizada la especificación si el alcance acordado cambia.

Añade o ajusta pruebas cuando exista una forma razonable de cubrir el comportamiento. Ejecuta primero verificaciones específicas y luego todas las comprobaciones obligatorias del repositorio. En este proyecto, como mínimo, ejecuta:

```bash
npm run lint
npm run build
```

No ocultes fallos preexistentes. Distingue entre fallos introducidos por la solución y fallos ya presentes, aportando evidencia reproducible.

## 5. Revisión obligatoria antes del commit y push

Antes de crear los commits finales y antes de cualquier push, lee [references/code-review.md](references/code-review.md) y revisa todo el cambio del issue contra el ancestro común con la rama base, incluidos archivos modificados, staged y no rastreados.

Presenta los hallazgos por severidad, con archivo y línea cuando sea posible. Separa:

- **Bloqueantes:** errores de corrección, seguridad, pérdida de datos, regresiones claras, incumplimiento de criterios o verificaciones obligatorias. No se puede continuar a commit/push hasta resolverlos.
- **Mejoras opcionales:** clean code, mantenibilidad, rendimiento, cobertura o claridad cuya omisión no vuelve incorrecta la solución.

Si hay cualquier hallazgo, informa al usuario antes de crear commits o hacer push y espera su decisión. Para cada mejora indica problema, impacto y cambio propuesto. Implementa únicamente las mejoras aceptadas; conserva un registro de las rechazadas para el resumen y el PR. Después vuelve a ejecutar las verificaciones afectadas y repite la revisión.

Si no hay hallazgos, indícalo brevemente y continúa sin pedir confirmación adicional. No inventes observaciones para forzar una pausa.

## 6. Commits detallados

Cuando la revisión esté limpia o el usuario haya decidido sobre las mejoras opcionales:

1. Añade al staging exclusivamente los archivos del issue y revisa el diff staged.
2. Agrupa los cambios en uno o varios commits lógicos. No mezcles refactors independientes.
3. Sigue la convención de mensajes del repositorio. Si no existe una, usa un asunto imperativo y específico, preferiblemente `fix(<ámbito>): <resultado>`, más un cuerpo que explique qué cambió y por qué.
4. Añade una referencia al issue, por ejemplo `Refs #123`. Reserva la palabra de cierre para el cuerpo del PR.
5. Verifica el estado y el historial resultante antes de publicar.

Un commit no es “detallado” si solo dice `fix`, `changes`, `update` o repite el número del issue sin explicar el resultado.

## 7. Push y pull request

- Publica la rama con seguimiento remoto, sin force push.
- Busca primero un PR abierto para esa rama. Si existe, actualízalo en vez de crear un duplicado.
- El PR debe apuntar a la rama base determinada por las reglas del proyecto; para este portafolio normalmente será `develop`.
- El título debe describir el resultado e incluir el issue cuando la convención lo pida.
- El cuerpo debe incluir: enlace de resolución del issue (`Closes #123` o la sintaxis del repositorio), especificación/criterios, resumen de cambios, validaciones con su resultado, revisión de código, riesgos o limitaciones, y mejoras opcionales rechazadas si las hubo.
- No fusiones el PR salvo solicitud explícita posterior.

## Entrega

Finaliza con un resumen conciso que incluya:

- rama base y rama de trabajo;
- commits creados con sus identificadores y propósito;
- verificaciones ejecutadas y resultado;
- conclusión de la revisión y decisiones sobre mejoras;
- enlace al PR;
- cualquier riesgo o paso pendiente.

Si el proceso se detuvo antes del push, deja claro qué falta y no afirmes que el issue quedó resuelto.

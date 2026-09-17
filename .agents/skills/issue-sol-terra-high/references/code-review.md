# Revisión previa a publicación

Usa esta guía después de implementar y validar, antes de crear los commits finales y hacer push. Revisa el cambio completo contra la rama base; no te limites al último archivo editado.

## Evidencia a inspeccionar

- Especificación y criterios de aceptación del issue.
- Diff desde el ancestro común con la rama base, incluyendo cambios staged, unstaged y archivos no rastreados.
- Archivos relacionados necesarios para entender contratos, rutas, estados y estilos.
- Resultado de pruebas, lint, build y otras verificaciones exigidas.
- Estado de Git para detectar archivos ajenos, generados o secretos.

## Prioridad de revisión

1. **Corrección:** el comportamiento satisface todos los criterios, incluidos estados vacíos, errores, límites y rutas alternativas relevantes.
2. **Regresiones:** no rompe API, navegación, contratos, responsive, accesibilidad ni comportamiento existente relacionado.
3. **Seguridad y datos:** no incorpora secretos, inyección, permisos excesivos, exposición de datos, escrituras destructivas o dependencias inseguras evitables.
4. **Pruebas y verificación:** las pruebas cubren la lógica con riesgo real; lint/build/tests pasan y los fallos se explican con evidencia.
5. **Clean code:** nombres expresivos, funciones y componentes enfocados, flujo simple, responsabilidades claras, duplicación relevante eliminada y comentarios que explican el porqué.
6. **Buenas prácticas del stack:** patrones existentes, manejo correcto de errores y estado, efectos controlados, tipos/validación cuando correspondan, HTML semántico y accesibilidad.
7. **Mantenibilidad y alcance:** evita cambios no relacionados, abstracciones prematuras, deuda innecesaria, código muerto y configuración accidental.
8. **Rendimiento:** busca trabajo repetido costoso, renders innecesarios, recursos excesivos o crecimiento no acotado cuando sean plausibles para el cambio.
9. **Documentación:** actualiza textos técnicos o de usuario que hayan quedado desfasados y deja claros los compromisos relevantes.

## Cómo reportar

Cada hallazgo debe indicar severidad, ubicación precisa, condición que lo provoca, impacto observable y corrección propuesta.

No reportes preferencias personales sin impacto. No marques como “clean code” un cambio cosmético que aumente el diff sin mejorar comprensión o riesgo.

Si no hay hallazgos, declara explícitamente que la revisión no encontró problemas bloqueantes ni mejoras opcionales justificadas y continúa con los commits.

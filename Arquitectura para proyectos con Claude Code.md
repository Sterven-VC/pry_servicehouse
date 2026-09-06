---
tags:
  - claude-code
  - dev
  - template
  - arquitectura
  - desarrollo
date: 2026-07-07
---
Guía de referencia para estructurar cualquier proyecto (apps, web, etc.) de forma que Claude Code mantenga contexto suficiente incluso cuando el sistema crece.

## Idea central

No existe un único archivo mágico. El patrón que escala es **contexto en capas**:

- `CLAUDE.md` es la puerta de entrada, no la enciclopedia.
- Todo lo que Claude necesita _a veces_ (no siempre) se delega a `docs/` o a `skills/`. 
- El archivo raíz **no debe crecer** con el proyecto — debe mantenerse corto (idealmente bajo 200 líneas).

## Estructura base de carpetas

```
mi-proyecto/
├── CLAUDE.md              # Contexto global, se carga SIEMPRE al iniciar sesión
├── .claude/
│   ├── settings.json      # Permisos, hooks (se versiona en git)
│   └── skills/            # Conocimiento específico, se carga bajo demanda
│       └── mi-skill/
│           └── SKILL.md
├── .claudeignore           # Excluye archivos del contexto automático
├── docs/                   # Documentación profunda, referenciada, no cargada de entrada
│   ├── arquitectura.md
│   └── api-contracts.md
└── src/
    ├── CLAUDE.md            # Contexto específico del módulo (opcional)
    └── ...
```

## Plantilla de CLAUDE.md

```markdown
# Mi Proyecto

Breve descripción de qué hace el proyecto y quién lo usa.

## Stack
- Lenguaje: 
- Framework: 
- Testing: 

## Estructura
- `src/...` — descripción
- `src/...` — descripción

## Comandos
- `comando` — qué hace
- `comando` — qué hace

## Reglas importantes
- Nunca commitear API keys / secretos
- (otras reglas críticas del proyecto)

## Referencias (leer solo si aplica)
- Arquitectura completa: @docs/arquitectura.md
- Contratos de API: @docs/api-contracts.md
```

El `@docs/arquitectura.md` no se carga siempre — Claude lo lee **cuando la tarea lo requiere**. Así el archivo raíz nunca se infla, aunque el proyecto tenga muchos módulos.

## CLAUDE.md anidados (para proyectos grandes)

Cuando el proyecto crece a varios módulos con lógica muy distinta, se puede poner un `CLAUDE.md` dentro de cada subcarpeta:

```
src/
├── CLAUDE.md              # contexto global de src/
├── strategies/
│   └── CLAUDE.md          # convenciones específicas de ese módulo
├── exchange/
│   └── CLAUDE.md          # detalles específicos de ese módulo
```

Claude Code carga el CLAUDE.md más cercano al archivo en el que está trabajando, además del raíz. Esto da contexto específico sin inflar el global.

## Skills como "memoria bajo demanda"

Para conocimiento que Claude necesita _a veces_ pero no en cada sesión (metodologías específicas, guías de estilo particulares, flujos de trabajo especializados), usar `.claude/skills/` en vez de meterlo en CLAUDE.md. Cada skill tiene su propio `SKILL.md` con una descripción rica en keywords para que Claude sepa cuándo activarla.

## Para tareas grandes: spec antes de código

Antes de programar algo grande:

1. Generar primero un `SPEC.md`, interrogando a Claude con preguntas de edge cases, tradeoffs, implementación técnica, UI/UX, etc.
2. Arrancar una sesión **nueva y limpia** solo para implementar contra ese spec.

Esto evita que el contexto de la sesión de "brainstorming" contamine la de "ejecución". Los specs más útiles son autocontenidos: nombran archivos e interfaces involucrados, indican qué queda fuera de alcance, y terminan con un paso de verificación end-to-end.

## `.claudeignore` y `settings.json`

- **`.claudeignore`**: como un `.gitignore` pero para el contexto de Claude — evita que archivos de datos, logs o resultados voluminosos inflen el contexto automáticamente. Ojo: no oculta archivos de una búsqueda explícita.
- **`.claude/settings.json`**: permisos (qué comandos puede correr sin pedir confirmación) y hooks. Para bloquear algo realmente sensible (API keys, credenciales), usar `permissions.deny` en `settings.json` — eso sí bloquea el acceso de lectura.

## Checklist rápido para cada proyecto nuevo

- [ ] Correr `/init` en el proyecto — genera un CLAUDE.md base analizando la estructura actual
- [ ] Mantener CLAUDE.md corto y como índice, no como documentación completa
- [ ] Meter documentación pesada (arquitectura, contratos, metodologías) en `docs/` y referenciarla con `@`
- [ ] Crear CLAUDE.md anidados para módulos con lógica muy distinta
- [ ] Mover conocimiento condicional a `skills/`
- [ ] Para features grandes: spec primero, sesión limpia para implementar
- [ ] Configurar `.claudeignore` y `permissions.deny` para lo sensible

## Fuente

Basado en la documentación oficial de Claude Code (code.claude.com/docs/en/best-practices) y prácticas de la comunidad.
# 🎓 Teacher Daniela: English Coaching Academy

![SkullRender Architecture](https://img.shields.io/badge/Architecture-SkullRender%20Pure%20Bones-red?style=for-the-badge)
![Angular](https://img.shields.io/badge/Angular%2019-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

> **"Bones + Brain = Rational Creativity"**
> Esta plataforma representa el estándar de ingeniería de SkullRender: una base sólida, limpia y altamente escalable para el coaching de idiomas.

---

## 💀 La Anatomía del Proyecto (The Bones)

Este proyecto no es solo una SPA; es una implementación de **Clean Architecture** y **Domain-Driven Design (DDD)** adaptada a las capacidades modernas de Angular 19.

### 🦴 Arquitectura de Corazón (Core)
- **Domain Layer Integration**: Los tipos de negocio (`EnglishLevel`, `Goal`, `Urgency`) están aislados en `core/models`, garantizando que la lógica de negocio sea independiente de la infraestructura.
- **Reactive State Management**: Implementación pura de **Angular Signals** para un manejo de estado reactivo, eficiente y sin zone-pollution.
- **Functional Guards & Adapters**: Uso de guards funcionales (`CanActivateFn`) e interceptores para un flujo de datos seguro y predecible.

### 🧠 Capa de Usuario (Features)
- **Onboarding Interactivo**: Un funnel de diagnóstico intuitivo que recolecta las necesidades del estudiante mediante una experiencia fluida.
- **Diagnosis Algorithm**: Motor de recomendaciones que asigna planes específicos basados en objetivos y urgencia del usuario.
- **Responsive Design**: UI minimalista y funcional optimizada para conversión en dispositivos móviles.

---

## 🛠️ Stack Tecnológico

| Componente | Tecnología |
| :--- | :--- |
| **Framework** | Angular 19 (Signals, Control Flow, Hydration) |
| **Estilos** | Tailwind CSS v3 / Vanilla CSS |
| **Estado** | Signal-based Service Store |
| **Integraciones** | WhatsApp Deep Linking |
| **Runtime** | Bun / Node.js |

---

## 🚀 Guía de Inicio Rápido

### Requisitos Previos
- [Bun](https://bun.sh/) (Recomendado) o Node.js v18+.
- Angular CLI v19.

### Instalación
```bash
# Instalar dependencias con el estándar SkullRender
bun install
```

### Desarrollo
```bash
# Iniciar servidor local
bun run dev
```

### Construcción
```bash
# Generar build de producción optimizada
bun run build
```

---

## ⚖️ Gobernanza y Estándares

Este software sigue estrictamente las reglas del **Phylactery Lich** de SkullRender:
1. **Package Manager**: `bun` es la única ley.
2. **Naming**: Variables y lógica en **English**, razonamiento arquitectónico en **Español**.
3. **Purity**: Prohibido el uso de librerías visuales pesadas (se eliminó Ionic en favor de CSS nativo y Tailwind).

---
**Desarrollado con precisión técnica por SkullRender.**  
*"Generamos tu idea desde los huesos."*

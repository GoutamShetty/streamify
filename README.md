# Streamify

Streamify is a React-based web application for data visualization and analysis, built with modern web technologies.

## Features

- Interactive data visualization using Recharts
- Data import/export functionality (CSV, XLSX, PDF) (Additional feature)
- Dark and Light Theme adaptation (Additional feature)
- Real-time data filtering and sorting
- Responsive design Adaptation (Open website in different devices)
- Type-safe development with TypeScript
- Used miragejs to generate data like Api and handled loading, error and empty state like real data.

## Tech Stack

- **Frontend Framework**: React 18
- **Type System**: TypeScript
- **UI Components**: Ant Design
- **Styling**: TailwindCSS
- **Data Visualization**: Recharts
- **State Management**: React Query
- **Build Tool**: Vite
- **Testing**: Jest + React Testing Library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
   `git clone https://github.com/GoutamShetty/streamify.git`

2. Install dependencies:
   `npm install`

3. Start the development server:
   `npm run dev`

The application will be available at `http://localhost:5173`

### Building for Production

`npm run build`

### Running Tests

`npm test`

### Deploying to Website

1. Runs test cases, TS check and builds project
   `npm run predeploy`

2. Deploying using github pages
   `npm run deploy`

## Design Decisions and Trade-offs

### Why React + TypeScript?

- Strong type safety helps catch errors early
- Excellent developer tooling and ecosystem

### Why Ant Design?

- Comprehensive UI component library
- Built-in TypeScript support
- Consistent design language
- Good documentation

### Why Vite?

- Faster development server startup
- Better hot module replacement
- Modern build tooling

### Trade-offs Considered

1. **Bundle Size vs Features**

   - Included comprehensive libraries like Ant Design and Recharts
   - Trade-off: Larger bundle size for better developer experience and feature set

2. **Type Safety vs Development Speed**

   - Chose strict TypeScript configuration
   - Trade-off: Initial development might be slower, but better maintainability

3. **Testing Approach**

   - Unit tests for critical functionality
   - Trade-off: Added one test case, because of time constrains

4. **Code Quality**
   - Followed all the quality ensured steps:
   - Sorted and separted import lines for library imports and custom imports.
   - Maintained configs and constants where ever required.
   - Made reusable components and utils.
   - Maintained responsiveness.
   - Maintained theme based stylings.
   - Added 1 test case to showcase knowledge of unit test case.
   - Followed standard practices while coding.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Goutam Shetty - [GitHub](https://github.com/GoutamShetty)

Project Link: [https://github.com/GoutamShetty/streamify](https://github.com/GoutamShetty/streamify)

Deployed Link: [https://goutamshetty.github.io/streamify/](https://goutamshetty.github.io/streamify/)

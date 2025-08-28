# Enterprise SaaS Platform Demo

A production-quality, frontend-only demo of a multi-tenant Enterprise SaaS Platform built with React 18, Next.js, and Tailwind CSS.

## 🚀 Features

- **Multi-tenant Architecture**: Complete tenant switching and organization management
- **Comprehensive Dashboard**: Real-time analytics, KPIs, and business metrics
- **User Management**: Role-based access control and user administration
- **Advanced Analytics**: Charts, reports, and data visualization
- **Billing Integration**: Subscription management and usage tracking
- **Enterprise Settings**: Organization, security, and API management
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Charts**: Recharts
- **Code Quality**: ESLint + Prettier

## 📱 Screens Included

1. **Authentication**: Login with tenant selection and SSO options
2. **Dashboard**: Executive overview with KPIs and real-time metrics
3. **Analytics**: Advanced reporting with multiple chart types
4. **User Management**: User administration with role management
5. **Billing**: Subscription management and invoice history
6. **Settings**: Organization, security, and API configuration

## 🎯 Demo Constraints

This is a **non-functional demo** designed for presentation purposes:
- All forms are disabled (visual only)
- No real API calls or external integrations
- Navigation is simulated (no actual routing)
- Data is mocked for demonstration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 8+

### Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>
cd enterprise-saas-platform-demo

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the demo.

### Available Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run type-check   # Run TypeScript checks
\`\`\`

## 🎨 Design System

- **Colors**: Neutral palette with blue accent (#3b82f6)
- **Typography**: System fonts with clear hierarchy
- **Spacing**: Consistent 8px grid system
- **Components**: Reusable UI components with variants
- **Accessibility**: WCAG 2.1 AA compliant

## 📁 Project Structure

\`\`\`
src/
├── components/          # Reusable UI components
│   ├── Charts/         # Chart components
│   ├── Layout/         # Layout components
│   └── UI/             # Base UI components
├── data/               # Mock data and types
├── pages/              # Application pages
└── types/              # TypeScript type definitions
\`\`\`

## 🔧 Customization

The demo is built with modularity in mind:
- Modify `src/data/mockData.ts` to change demo data
- Update `src/types/` for type definitions
- Customize styling in component files
- Adjust layout in `src/components/Layout/`

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

This is a demo project. For production use, consider:
- Adding real API integration
- Implementing proper routing
- Adding authentication logic
- Setting up state management
- Adding comprehensive testing

---

Built with ❤️ for enterprise software demonstrations.

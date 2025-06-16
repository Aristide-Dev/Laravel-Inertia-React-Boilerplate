import { 
  Home,
  FileText,
  Users,
  User,
  Heart,
  Settings,
  Newspaper,
  Briefcase,
  Phone,
  AlertTriangle,
  Palette
} from 'lucide-react';

const baseMenuItems = [
  {
    label: 'Accueil',
    href: 'home',
    icon: Home,
  },
  {
    label: 'Articles',
    href: 'articles',
    icon: Newspaper,
  },
  {
    label: 'Services',
    href: 'services', 
    icon: Briefcase,
  },
  {
    label: 'À propos',
    icon: Users,
    actif: 'about.*',
    children: [
      { label: 'Notre équipe', href: 'about', icon: Users },
      { label: 'Notre mission', href: 'about', icon: FileText },
      { label: 'Nos valeurs', href: 'about', icon: Heart },
    ]
  },
  {
    label: 'Espace Utilisateur',
    icon: User,
    actif: '',
    children: [
      { label: 'Mes favoris', href: 'favorites', icon: Heart },
      { label: 'Mon tableau de bord', href: 'dashboard', icon: Settings },
      { label: 'Se connecter', href: 'login', icon: User },
    ]
  },
  {
    label: 'Contact',
    href: 'contact',
    icon: Phone,
  }
];

// Ajouter des liens de développement en mode développement
const isDevelopment = import.meta.env.DEV;
export const menuItems = isDevelopment 
  ? [...baseMenuItems, 
      { 
        label: '🎨 Thème Demo', 
        href: 'theme.demo', 
        icon: Palette 
      },
      { 
        label: '🚨 Test Erreurs', 
        href: 'errors.test.index', 
        icon: AlertTriangle 
      }
    ]
  : baseMenuItems;

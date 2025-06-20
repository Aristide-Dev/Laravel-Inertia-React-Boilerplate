import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';
import { useTheme } from '@/hooks/use-theme';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    const { currentTheme } = useTheme();
    const isDark = currentTheme?.isDark || false;
    
    return (
        <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 overflow-hidden">
            {/* Arrière-plan avec dégradé dynamique basé sur le thème */}
            <motion.div 
                className="absolute inset-0 z-0 pointer-events-none" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                style={{ 
                    background: isDark 
                        ? `linear-gradient(135deg, var(--primary-950) 0%, var(--primary-900) 100%)` 
                        : `linear-gradient(135deg, var(--primary-50) 0%, var(--accent-100) 100%)`
                }}
            />
            
            {/* Effet de motif en arrière-plan */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{ 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23000000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                backgroundSize: '100px 100px'
            }} />
            
            {/* Particules animées */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Soft glowing particles avec animations fluides */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`glow-${i}`}
                        className="absolute rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 8 + 3}px`,
                            height: `${Math.random() * 8 + 3}px`,
                            background: isDark 
                                ? `rgba(var(--accent-300), 0.2)`
                                : `rgba(var(--primary-500), 0.2)`
                        }}
                        animate={{
                            opacity: [0.2, 0.6, 0.2],
                            scale: [1, 1.3, 1],
                            y: [0, -20, 0],
                            x: [0, Math.random() * 10 - 5, 0],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Effet de brillance générale */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    style={{
                        background: `linear-gradient(to right, transparent, rgba(var(--accent-400), 0.05), transparent)`
                    }}
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ 
                        duration: 10, 
                        repeat: Infinity, 
                        ease: "linear",
                        repeatDelay: 3
                    }}
                />
            </div>
            
            {/* Contenu principal avec effet de carte et animations */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-sm z-10"
            >
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <Link href="/" className="group relative">
                            {/* Effet de halo au hover */}
                            <motion.div 
                                className="absolute -inset-4 rounded-xl opacity-0 group-hover:opacity-100 blur-lg pointer-events-none"
                                transition={{ duration: 0.3 }}
                                style={{
                                    background: `radial-gradient(circle, rgba(var(--accent-500), 0.2), rgba(var(--primary-500), 0.2))`
                                }}
                            />
                            
                            {/* Logo avec animation et effets */}
                            <motion.div 
                                className="relative mb-1 flex h-14 w-14 items-center justify-center rounded-xl backdrop-blur-md shadow-lg border transition-all duration-300"
                                style={{
                                    background: isDark 
                                        ? `rgba(var(--primary-800), 0.5)`
                                        : `rgba(var(--primary-100), 0.5)`,
                                    borderColor: isDark 
                                        ? `rgba(var(--accent-500), 0.3)`
                                        : `rgba(var(--primary-300), 0.3)`
                                }}
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <AppLogoIcon className="size-9 fill-current text-[var(--foreground)] dark:text-white" />
                                
                                {/* Effet de brillance au hover */}
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
                                    animate={{ x: ['-200%', '200%'] }}
                                    transition={{ 
                                        duration: 1.5, 
                                        repeat: Infinity, 
                                        repeatDelay: 1
                                    }}
                                />
                                
                                {/* Effet de particules autour du logo */}
                                <motion.div
                                    className="absolute -top-1 -right-1 w-3 h-3 pointer-events-none"
                                    animate={{ 
                                        rotate: [0, 360],
                                        opacity: [0.7, 0.3, 0.7]
                                    }}
                                    transition={{ 
                                        rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                                        opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                >
                                    <Sparkles className="w-full h-full text-yellow-300" />
                                </motion.div>
                            </motion.div>
                            <span className="sr-only">{title}</span>
                        </Link>

                        <motion.div 
                            className="space-y-2 text-center"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h1 className="text-2xl font-medium text-[color:var(--foreground)] dark:text-white">{title}</h1>
                            <p className="text-center text-sm text-[color:var(--muted-foreground)] dark:text-white/60">{description}</p>
                        </motion.div>
                    </div>
                    
                    {/* Carte principale avec effet glassmorphism et animation */}
                    <motion.div 
                        className="backdrop-blur-md shadow-xl rounded-xl p-8 border relative"
                        style={{
                            background: isDark 
                                ? `rgba(var(--primary-900), 0.8)`
                                : `rgba(255, 255, 255, 0.9)`,
                            borderColor: isDark 
                                ? `rgba(var(--accent-500), 0.2)`
                                : `rgba(var(--primary-200), 0.2)`
                        }}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    >
                        {/* Effet de brillance interne */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-xl pointer-events-none" />
                        
                        {/* Contenu du formulaire avec animation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="relative z-10"
                        >
                    {children}
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
            
            {/* Cercles décoratifs avec les couleurs du thème et animations */}
            <motion.div 
                className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                style={{
                    background: `rgba(var(--accent-500), 0.1)`
                }}
                animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.8, 0.6]
                }}
                transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div 
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                style={{
                    background: `rgba(var(--primary-500), 0.1)`
                }}
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.7, 0.5]
                }}
                transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
        </div>
    );
}

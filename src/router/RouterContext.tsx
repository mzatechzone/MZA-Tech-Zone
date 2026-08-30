import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { RoutePath } from '../types';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string, options?: { replace?: boolean; state?: unknown }) => void;
  isActive: (path: string, exact?: boolean) => boolean;
  selectedProjectId: string | null;
  openProjectModal: (projectId: string) => void;
  closeProjectModal: () => void;
  basePath: string;
}

const RouterContext = createContext<RouterContextType | null>(null);

/**
 * Returns the detected base path (e.g. '/MZA-Tech-Zone' or '') without trailing slash.
 */
export function getBasePath(): string {
  // Vite injects import.meta.env.BASE_URL (e.g. '/MZA-Tech-Zone/' or '/')
  const envBase = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');

  if (typeof window !== 'undefined') {
    if (envBase && envBase !== '/' && window.location.pathname.startsWith(envBase)) {
      return envBase;
    }
    if (window.location.pathname.startsWith('/MZA-Tech-Zone')) {
      return '/MZA-Tech-Zone';
    }
  }

  return envBase && envBase !== '/' ? envBase : '';
}

/**
 * Normalizes any raw pathname into a clean route (e.g. '/services/web-development').
 * Strips out GitHub Pages base prefix, query strings, and hash fragments.
 */
export function getRouteFromPathname(rawPath: string): string {
  let clean = rawPath.split('?')[0].split('#')[0];

  const base = getBasePath();
  if (base && clean.startsWith(base)) {
    clean = clean.slice(base.length);
  } else if (clean.startsWith('/MZA-Tech-Zone')) {
    clean = clean.slice('/MZA-Tech-Zone'.length);
  }

  if (!clean.startsWith('/')) clean = '/' + clean;
  if (clean.length > 1 && clean.endsWith('/')) {
    clean = clean.slice(0, -1);
  }

  return clean || '/';
}

/**
 * Prepends the base path to a route for browser URLs and anchor hrefs.
 */
export function getFullPathWithBase(route: string): string {
  if (
    route.startsWith('#') ||
    route.startsWith('http://') ||
    route.startsWith('https://') ||
    route.startsWith('mailto:') ||
    route.startsWith('tel:')
  ) {
    return route;
  }

  const base = getBasePath();
  const cleanRoute = route.startsWith('/') ? route : '/' + route;
  if (!base) return cleanRoute;
  return `${base}${cleanRoute === '/' ? '/' : cleanRoute}`;
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return getRouteFromPathname(window.location.pathname);
    }
    return '/';
  });

  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('project');
    }
    return null;
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = getRouteFromPathname(window.location.pathname);
      setCurrentPath(path);
      const params = new URLSearchParams(window.location.search);
      setSelectedProjectId(params.get('project'));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((path: string, options?: { replace?: boolean; state?: unknown }) => {
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:') || path.startsWith('tel:')) {
      window.location.href = path;
      return;
    }

    if (path.startsWith('#')) {
      const el = document.querySelector(path);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const route = getRouteFromPathname(path);
    setCurrentPath(route);

    if (typeof window !== 'undefined') {
      const fullPath = getFullPathWithBase(route);
      if (options?.replace) {
        window.history.replaceState(options?.state || {}, '', fullPath);
      } else {
        window.history.pushState(options?.state || {}, '', fullPath);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const openProjectModal = useCallback((projectId: string) => {
    setSelectedProjectId(projectId);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('project', projectId);
      window.history.pushState({}, '', url.toString());
    }
  }, []);

  const closeProjectModal = useCallback(() => {
    setSelectedProjectId(null);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('project');
      window.history.pushState({}, '', url.toString());
    }
  }, []);

  const isActive = useCallback(
    (path: string, exact = false) => {
      const target = getRouteFromPathname(path);
      if (exact || target === '/') {
        return currentPath === target;
      }
      return currentPath === target || currentPath.startsWith(target + '/');
    },
    [currentPath]
  );

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        navigate,
        isActive,
        selectedProjectId,
        openProjectModal,
        closeProjectModal,
        basePath: getBasePath(),
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

export const Link: React.FC<{
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  id?: string;
  title?: string;
}> = ({ to, className = '', children, onClick, id, title }) => {
  const { navigate } = useRouter();
  const fullHref = getFullPathWithBase(to);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:') || to.startsWith('tel:')) {
      if (onClick) onClick(e);
      return;
    }

    if (to.startsWith('#')) {
      e.preventDefault();
      if (onClick) onClick(e);
      const el = document.querySelector(to);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Only intercept normal left clicks without modifier keys
    if (e.button === 0 && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
      e.preventDefault();
      if (onClick) onClick(e);
      navigate(to);
    }
  };

  return (
    <a
      id={id}
      href={fullHref}
      title={title}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

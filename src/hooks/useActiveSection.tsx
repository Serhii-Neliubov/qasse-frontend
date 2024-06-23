import { useEffect, useState } from 'react';

const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('div[id]');
            let currentSection = '';

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentSection = section.id;
                }
            });

            if (currentSection && currentSection !== activeSection) {
                setActiveSection(currentSection);
                window.history.pushState(null, '', `#${currentSection}`);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSection]);

    return activeSection;
};

export default useActiveSection;

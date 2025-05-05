import React, { useEffect, useRef } from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const AIInteractive = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // @ts-ignore
    if (window.particlesJS) {
      // @ts-ignore
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: isMobile ? 30 : 80, 
            density: {
              enable: true,
              value_area: isMobile ? 500 : 800
            }
          },
          color: {
            value: '#64ffda'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: isMobile ? 2 : 3, 
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: isMobile ? 100 : 150, 
            color: '#64ffda',
            opacity: 0.2,
            width: isMobile ? 0.8 : 1
          },
          move: {
            enable: true,
            speed: isMobile ? 1.5 : 2, 
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: isMobile ? 100 : 140,
              line_linked: {
                opacity: 0.5
              }
            },
            push: {
              particles_nb: isMobile ? 2 : 4
            }
          }
        },
        retina_detect: true
      });
    }
  }, [isMobile]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{ width: '100%', height: '100%' }}
    >
      <Box
        id="particles-js"
        ref={containerRef}
        width="100%"
        height="100%"
        position="absolute"
        top={0}
        right={0}
        zIndex={1}
      />
    </motion.div>
  );
};
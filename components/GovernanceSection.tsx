'use client';

import { motion } from 'motion/react';

export function GovernanceSection() {
  return (
    <section className="py-24 px-6 bg-bg-secondary relative overflow-hidden border-b border-border-default/30">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto relative z-10 space-y-24">

        {/* Título da seção */}
        <div className="text-center">
          <p className="font-body text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
            Explicação
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white/90">
            Por que a maioria dos esforços de marketing não gera resultado?
          </h2>
        </div>

        {/* Banner 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-body text-lg md:text-xl text-text-secondary mb-4 font-light">
            Na maioria das empresas, o problema não está na execução.
          </p>
          <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Está na falta de direção,<br className="hidden md:block" /> estrutura e clareza.
          </h3>
          <span className="inline-flex items-center gap-4 text-primary font-display font-bold text-2xl md:text-3xl">
            <span className="hidden md:block w-12 h-[3px] bg-primary rounded-full" />
            Sem isso, nada escala.
          </span>
        </motion.div>

        {/* Banner 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-10 text-white">
            Sem estrutura, o marketing vira{' '}
            <span className="text-primary">esforço disperso.</span>
          </h3>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-3xl mx-auto">
            {['Ações isoladas.', 'Sem previsibilidade.', 'Sem escala real.'].map((text, i) => (
              <div
                key={i}
                className="bg-bg-card border border-border-default rounded-xl p-6 shadow-md w-full md:w-1/3 hover:border-primary/50 transition-colors"
              >
                <span className="block text-primary text-sm font-bold mb-2">0{i + 1}</span>
                <span className="font-body text-lg md:text-xl text-text-secondary">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Banner 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white leading-tight">
            Empresas maduras{' '}
            <span className="text-text-secondary font-light">não investem às cegas.</span>
          </h3>
          <div className="font-display font-bold text-2xl md:text-4xl text-primary mt-4">
            Investem com clareza.
          </div>
        </motion.div>

        {/* Banner 4 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          <div className="md:w-1/2 text-center md:text-right">
            <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
              O que toda empresa<br className="hidden md:block" /> precisa ter{' '}
              <span className="text-primary">primeiro.</span>
            </h3>
          </div>
          <div className="hidden md:block w-px h-32 bg-border-default/50" />
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <ul className="space-y-4">
              {[
                'Diagnóstico real',
                'Gargalos mapeados',
                'Direção definida',
                'Próximos passos claros',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div
                    className="w-2 h-2 rounded-full bg-primary shrink-0"
                    style={{ opacity: 1 - i * 0.15 }}
                  />
                  <p
                    className="font-body text-xl md:text-2xl font-medium text-white"
                    style={{ opacity: 1 - i * 0.1 }}
                  >
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

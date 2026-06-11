import { useState } from 'react'

import type { EnterpriseSection } from '@/mock/enterprise'

import { ApiDocSection } from './components/ApiDocSection'
import { ContactSection } from './components/ContactSection'
import { CustomSection } from './components/CustomSection'
import { DeploySection } from './components/DeploySection'
import { EnterpriseSidebar } from './components/EnterpriseSidebar'
import { IntroSection } from './components/IntroSection'
import { PartnersSection } from './components/PartnersSection'
import styles from './index.module.scss'

export function EnterprisePage() {
  const [section, setSection] = useState<EnterpriseSection>('intro')
  const [contactRemark, setContactRemark] = useState('')

  const handleBookConsult = () => {
    setContactRemark('希望了解模特定制服务，请安排评估。')
    setSection('contact')
  }

  return (
    <div className={styles.page}>
      <EnterpriseSidebar active={section} onChange={setSection} />
      <main className={styles.main}>
        {section === 'intro' && <IntroSection />}
        {section === 'api' && <ApiDocSection />}
        {section === 'deploy' && <DeploySection />}
        {section === 'custom' && <CustomSection onBookConsult={handleBookConsult} />}
        {section === 'contact' && <ContactSection defaultRemark={contactRemark} />}
        {section === 'partners' && <PartnersSection />}
      </main>
    </div>
  )
}

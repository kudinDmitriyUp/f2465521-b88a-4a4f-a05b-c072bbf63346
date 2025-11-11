import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <NavbarStyleApple
        navItems={[
          { name: 'About', id: 'about' },
          { name: 'Services', id: 'services' },
          { name: 'Contact', id: 'contact' },
          { name: 'Blog', id: 'blog' },
          { name: 'Careers', id: 'careers' }
        ]}
        brandName="Your Brand"
      />

      <main>
        {/* Content sections would go here */}
      </main>

      {/* Footer */}
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: 'Company',
              items: [
                { label: 'About Us', href: 'about' },
                { label: 'Our Mission', href: 'mission' },
                { label: 'Team', href: 'team' },
                { label: 'Careers', href: 'careers' }
              ]
            },
            {
              title: 'Services',
              items: [
                { label: 'Web Design', href: 'services' },
                { label: 'Development', href: 'development' },
                { label: 'Consulting', href: 'consulting' },
                { label: 'Join Today', href: 'https://example.com/signup' }
              ]
            },
            {
              title: 'Resources',
              items: [
                { label: 'Blog', href: 'blog' },
                { label: 'Documentation', href: 'docs' },
                { label: 'Support', href: 'support' },
                { label: 'Get Started Now', href: 'https://app.example.com/start' }
              ]
            }
          ]}
          copyrightText="© 2025 | Your Brand"
          onPrivacyClick={() => console.log('Privacy policy clicked')}
        />
      </div>
    </div>
  );
}
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Code, Database, Globe, Smartphone } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">Arun Puram</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
            DevOps Engineer building scalable infrastructure and automating deployment pipelines
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Arunnpuram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/arunpuram/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:arunpuram@outlook.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Skills & Technologies</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-3 text-foreground">Cloud Platforms</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Azure</Badge>
                <Badge variant="secondary">GCP</Badge>
                <Badge variant="secondary">Vercel</Badge>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-3 text-foreground">Infrastructure</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Kubernetes</Badge>
                <Badge variant="secondary">Terraform</Badge>
                <Badge variant="secondary">Ansible</Badge>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-3 text-foreground">CI/CD & Monitoring</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Jenkins</Badge>
                <Badge variant="secondary">GitHub Actions</Badge>
                <Badge variant="secondary">Prometheus</Badge>
                <Badge variant="secondary">Grafana</Badge>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-3 text-foreground">Programming</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Bash</Badge>
                <Badge variant="secondary">Go</Badge>
                <Badge variant="secondary">YAML</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:shadow-primary/20">
              <CardHeader>
                <img
                  src="/cloud-commerce-ecommerce-platform-dashboard.png"
                  alt="CloudCommerce Platform"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <CardTitle>CloudCommerce</CardTitle>
                <CardDescription>
                  Modern cloud-based e-commerce platform with scalable architecture and advanced features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Cloud</Badge>
                  <Badge variant="outline">E-commerce</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/Arunnpuram/cloudcommerce" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:shadow-primary/20">
              <CardHeader>
                <img
                  src="/cinema-movie-database-vault-interface-dark-theme.png"
                  alt="CinemaVault App"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <CardTitle>CinemaVault</CardTitle>
                <CardDescription>
                  Comprehensive movie database and management system with advanced search and filtering capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Database</Badge>
                  <Badge variant="outline">API</Badge>
                  <Badge variant="outline">Search</Badge>
                  <Badge variant="outline">Movies</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/Arunnpuram/CinemaVault" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:shadow-primary/20">
              <CardHeader>
                <img
                  src="/dynamic-sql-data-extraction-tool-dashboard-interfa.png"
                  alt="Dynamic SQL Data Extractor"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <CardTitle>Dynamic SQL Data Extractor</CardTitle>
                <CardDescription>
                  Powerful tool for dynamic SQL query generation and data extraction with flexible configuration options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">SQL</Badge>
                  <Badge variant="outline">Data Extraction</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Analytics</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://github.com/Arunnpuram/DynamicSQLDataExtractor"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Arun Puram. Built with Next.js and deployed on GitHub Pages.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/Arunnpuram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arunpuram/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:arunpuram@outlook.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

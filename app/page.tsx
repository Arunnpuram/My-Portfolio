import { Github, Linkedin, Mail, Code, Database, Globe, Smartphone } from 'lucide-react'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Arun Puram</h1>
          <p className="text-xl text-gray-600 mb-8">
            DevOps Engineer building scalable infrastructure and automating deployment pipelines
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Arunnpuram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/arunpuram/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:arunpuram@outlook.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Skills & Technologies</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-3">Cloud Platforms</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Azure</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">GCP</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-3">Infrastructure</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Kubernetes</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Terraform</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-3">CI/CD & Monitoring</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Jenkins</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">GitHub Actions</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Prometheus</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-3">Programming</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Bash</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Go</span>
              </div>
            </div>
          </div>
        </div>
      </section>      
{/* Projects Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">CloudCommerce</h3>
              <p className="text-gray-600 mb-4">
                Modern cloud-based e-commerce platform with scalable architecture and advanced features
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">React</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Node.js</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Cloud</span>
              </div>
              <a
                href="https://github.com/Arunnpuram/cloudcommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">CinemaVault</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive movie database and management system with advanced search capabilities
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Database</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">API</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Search</span>
              </div>
              <a
                href="https://github.com/Arunnpuram/CinemaVault"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Dynamic SQL Data Extractor</h3>
              <p className="text-gray-600 mb-4">
                Powerful tool for dynamic SQL query generation and data extraction
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">SQL</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Python</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Analytics</span>
              </div>
              <a
                href="https://github.com/Arunnpuram/DynamicSQLDataExtractor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">© 2024 Arun Puram. Built with Next.js and deployed on GitHub Pages.</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Arunnpuram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arunpuram/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:arunpuram@outlook.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
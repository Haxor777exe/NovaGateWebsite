import { Instagram,
    Linkedin,
    Mail,
    Phone} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-mono text-blue-400 mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-300">
                <li>AI Voicebots</li>
                <li>AI Chatbots</li>
                <li>AI Agents</li>
                <li>Smart Software Development</li>
                <li>Automations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-blue-400 mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>david@novagate-solutions.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+45 71 62 63 79</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-blue-400 mb-4">Network</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>© 2025 NovaGate Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
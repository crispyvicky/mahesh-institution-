export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 py-12 md:py-16 text-slate-400">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">

                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold text-white mb-4">CivilEdge <span className="text-sky-500">Academy</span></h3>
                        <p className="text-sm leading-relaxed mb-6">
                            Empowering the next generation of civil engineers with practical, industry-focused software training and placement guidance.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-sky-400 transition-colors">Home</a></li>
                            <li><a href="#courses" className="hover:text-sky-400 transition-colors">Courses</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">About Us</a></li>
                            <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Top Courses</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-sky-400 transition-colors">STAAD Pro Masterclass</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">AutoCAD 2D/3D</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">ETABS & SAFE Design</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">Quantity Surveying</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-sky-400 transition-colors">Refund Policy</a></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>© {new Date().getFullYear()} CivilEdge Academy. All rights reserved.</p>
                    <div className="flex items-center gap-1">
                        Designed for <span className="text-sky-400 font-medium">Civil Engineers</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

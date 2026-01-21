import Link from "next/link";
import { ArrowRight, CheckCircle2, Smartphone, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import Image from "next/image";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiFlutter, SiKotlin, SiFirebase, SiAmazonwebservices, SiMongodb, SiGit, SiPostman, SiAndroidstudio, SiJetpackcompose } from "react-icons/si";
import { FaCreditCard, FaCode } from "react-icons/fa";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen">
      <ParticleBackground />

      {/* 1. Hero / Introduction - REDESIGNED */}
      <ScrollReveal delay={100}>
        <section className="relative py-12 md:py-4 px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50/20 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-background">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Left Side - Text Content */}
              <div className="space-y-6 text-center md:text-left order-2 md:order-1">
                {/* Badge */}
                <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Available for new projects
                </Badge>

                {/* Name */}
                <div>
                  <p className="text-base md:text-lg text-muted-foreground font-medium mb-2">
                    👋 Hi, I'm
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                    Aditya Singh
                  </h2>
                </div>

                {/* Headline - Gradient */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight gradient-text">
                  I Build Mobile Apps for Startups
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                  Production-ready apps in <span className="font-semibold text-primary">60-90 days</span>.
                  Clean code, fast delivery, real results.
                </p>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-6 justify-center md:justify-start pt-4">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-primary">3+</p>
                    <p className="text-sm text-muted-foreground">Projects Delivered</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-primary">10K+</p>
                    <p className="text-sm text-muted-foreground">Users Reached</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-primary">100%</p>
                    <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                  <Button asChild size="lg" className="px-8 shadow-lg hover:shadow-xl transition-all">
                    <Link href="/projects">
                      View Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="px-8 border-2">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>

              {/* Right Side - Profile Image + Visual Elements */}
              <div className="flex justify-center items-center order-1 md:order-2">
                <div className="relative">
                  {/* Main Profile Image - LARGER */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    {/* Animated gradient ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-2xl animate-pulse"></div>

                    {/* Image container */}
                    <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl float-animation">
                      <Image
                        src="/me.png"
                        alt="Aditya Singh - Mobile App Developer"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* Floating badge - Tech stack with YOUR actual stack */}
                    <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl px-5 py-3.5 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center -space-x-2">
                          {/* Flutter Icon - Blue */}
                          <div className="w-9 h-9 rounded-full bg-white dark:bg-gray-800 border-2 border-white dark:border-gray-900 shadow-sm flex items-center justify-center">
                            <SiFlutter className="w-5 h-5" style={{ color: '#02569B' }} />
                          </div>
                          {/* Kotlin Icon - Purple */}
                          <div className="w-9 h-9 rounded-full bg-white dark:bg-gray-800 border-2 border-white dark:border-gray-900 shadow-sm flex items-center justify-center">
                            <SiKotlin className="w-5 h-5" style={{ color: '#7F52FF' }} />
                          </div>
                          {/* Firebase Icon - Yellow */}
                          <div className="w-9 h-9 rounded-full bg-white dark:bg-gray-800 border-2 border-white dark:border-gray-900 shadow-sm flex items-center justify-center">
                            <SiFirebase className="w-5 h-5" style={{ color: '#FFCA28' }} />
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Full Stack</span>
                      </div>
                    </div>


                    {/* Floating verification badge */}
                    <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-full p-3 shadow-lg animate-bounce">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>


      {/* 2. What I Offer (Services) */}
      <ScrollReveal delay={100}>
        <section className="py-14 px-6 bg-secondary/15">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">What I Offer</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                End-to-end solutions for your mobile app needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-none shadow-sm">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">MVP Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Launch your idea in 60-90 days. Get to market fast with a solid foundation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Mobile App Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Beautiful, intuitive interfaces that users love. Design that drives conversion.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">API Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect to payments, analytics, and backend systems securely and reliably.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Ongoing Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep your app running smoothly with updates, bug fixes, and improvements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 3. Featured Work (Projects) */}
      <ScrollReveal delay={100}>
        <section className="py-14 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real products built for real businesses. From e-commerce to exam prep,
                each project focuses on user experience and business results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {featuredProjects.map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
                    <div className="aspect-[9/16] relative bg-secondary/20 overflow-hidden">
                      {project.screenshots[0] && (
                        <Image
                          src={project.screenshots[0]}
                          alt={project.title}
                          fill
                          className="object-cover object-top"
                        />
                      )}
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-semibold line-clamp-2">{project.title}</h3>
                        <Badge variant="secondary" className="shrink-0 text-xs">{project.type}</Badge>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.cardDescription}
                      </p>

                      <div className="flex gap-2 flex-wrap">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 4. How It Works (Process) */}
      <ScrollReveal delay={100}>
        <section className="py-14 px-6 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
              <p className="text-base text-muted-foreground">
                Simple process, clear communication
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardContent className="pt-6 space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Clear Requirements</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We discuss goals, users, and timeline. I clarify scope and provide estimates.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="pt-6 space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Fast Development</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Regular updates, clean code, and quick iterations. You see progress weekly.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="pt-6 space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Smooth Launch</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Deployment support and post-launch fixes. Your app goes live with confidence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 5. Testimonials */}
      <section className="py-16 px-6 bg-gradient-to-br from-primary/5 to-purple-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by founders and businesses to deliver quality mobile solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Testimonial 1 - Valmik */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur">
              <CardContent className="p-6 md:p-8 space-y-4">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
                  "Aditya is technically strong and reliable. He understands requirements well and delivers clean, functional solutions on time."
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">V</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Valmik</p>
                    <p className="text-xs text-muted-foreground">Founder</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 - Arvid Singh */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur">
              <CardContent className="p-6 md:p-8 space-y-4">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
                  "Working with Aditya was smooth and professional. He communicates clearly and focuses on building practical, scalable mobile applications."
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Arvid Singh</p>
                    <p className="text-xs text-muted-foreground">Client</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Tech Stack */}
      <section className="py-14 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Technologies I Use</h2>
            <p className="text-base text-muted-foreground">
              Modern stack for production-ready mobile applications
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Flutter - FIRST! */}
            <Card className="border-border/50 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 group cursor-default hover:-translate-y-1">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <SiFlutter className="w-7 h-7 text-blue-500" />
                </div>
                <p className="text-sm font-semibold">Flutter</p>
                <p className="text-xs text-muted-foreground">Cross-Platform</p>
              </CardContent>
            </Card>

            {/* Android Studio */}
            <Card className="border-border/50 hover:border-green-500/50 hover:shadow-lg transition-all duration-300 group cursor-default hover:-translate-y-1">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-green-400/10 to-green-600/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <SiAndroidstudio className="w-7 h-7 text-green-500" />
                </div>
                <p className="text-sm font-semibold">Android Studio</p>
                <p className="text-xs text-muted-foreground">Native Dev</p>
              </CardContent>
            </Card>

            {/* Kotlin */}
            <Card className="border-border/50 hover:border-purple-500/50 hover:shadow-lg transition-all duration-300 group cursor-default hover:-translate-y-1">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-purple-400/10 to-purple-600/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <SiKotlin className="w-7 h-7 text-purple-500" />
                </div>
                <p className="text-sm font-semibold">Kotlin</p>
                <p className="text-xs text-muted-foreground">Primary Lang</p>
              </CardContent>
            </Card>

            {/* Firebase */}
            <Card className="border-border/50 hover:border-orange-500/50 hover:shadow-lg transition-all duration-300 group cursor-default hover:-translate-y-1">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-orange-400/10 to-yellow-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <SiFirebase className="w-7 h-7 text-orange-500" />
                </div>
                <p className="text-sm font-semibold">Firebase</p>
                <p className="text-xs text-muted-foreground">Backend & Auth</p>
              </CardContent>
            </Card>

            {/* AWS */}
            <Card className="border-border/50 hover:border-orange-600/50 hover:shadow-lg transition-all duration-300 group cursor-default hover:-translate-y-1">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-orange-500/10 to-orange-700/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <SiAmazonwebservices className="w-7 h-7 text-orange-600" />
                </div>
                <p className="text-sm font-semibold">AWS</p>
                <p className="text-xs text-muted-foreground">Cloud Services</p>
              </CardContent>
            </Card>

            {/* Razorpay */}
            <Card className="border-border/50 hover:border-blue-600/50 hover:shadow-lg transition-all duration-300 group cursor-default hover:-translate-y-1">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-500/10 to-blue-700/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaCreditCard className="w-7 h-7 text-blue-600" />
                </div>
                <p className="text-sm font-semibold">Razorpay</p>
                <p className="text-xs text-muted-foreground">Payments</p>
              </CardContent>
            </Card>

            {/* Jetpack Compose */}
            <Card className="border-border/50 hover:border-cyan-500/50 hover:shadow-lg transition-all duration-300 group cursor-default hover:-translate-y-1">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <SiJetpackcompose className="w-7 h-7 text-cyan-500" />
                </div>
                <p className="text-sm font-semibold">Jetpack Compose</p>
                <p className="text-xs text-muted-foreground">Modern UI</p>
              </CardContent>
            </Card>

            {/* MongoDB */}
            <Card className="border-border/50 hover:border-green-600/50 hover:shadow-lg transition-all duration-300 group cursor-default hover:-translate-y-1">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-green-500/10 to-green-700/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <SiMongodb className="w-7 h-7 text-green-600" />
                </div>
                <p className="text-sm font-semibold">MongoDB</p>
                <p className="text-xs text-muted-foreground">Database</p>
              </CardContent>
            </Card>

            {/* REST APIs */}
            <Card className="border-border/50 hover:border-indigo-500/50 hover:shadow-lg transition-all duration-300 group cursor-default hover:-translate-y-1">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-indigo-400/10 to-purple-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaCode className="w-7 h-7 text-indigo-500" />
                </div>
                <p className="text-sm font-semibold">REST APIs</p>
                <p className="text-xs text-muted-foreground">Integration</p>
              </CardContent>
            </Card>

            {/* Git */}
            <Card className="border-border/50 hover:border-orange-700/50 hover:shadow-lg transition-all duration-300 group cursor-default hover:-translate-y-1">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-orange-600/10 to-red-600/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <SiGit className="w-7 h-7 text-orange-700" />
                </div>
                <p className="text-sm font-semibold">Git & GitHub</p>
                <p className="text-xs text-muted-foreground">Version Control</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. About Me */}
      <ScrollReveal delay={100}>
        <section className="py-12 px-6 bg-secondary/10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">About</h2>
              <div className="space-y-3 text-base text-muted-foreground">
                <p>
                  I help startups turn ideas into production-ready mobile apps.
                  With experience building apps that serve thousands of users, I focus on results.
                </p>
                <p>
                  Whether you need an e-commerce platform or a custom solution,
                  I build apps that are fast, secure, and designed to grow.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 8. Final CTA (Ready to Build) */}
      <ScrollReveal delay={100}>
        {/* Final CTA - Gradient Blue Background */}
        <section className="py-16 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Build Your App?
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Let's discuss your project and see how I can help turn your idea into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8 bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8 border-white text-white hover:bg-white/10">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

      </ScrollReveal>
    </div>
  );
}

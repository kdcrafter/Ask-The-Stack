var Alexa = require("alexa-sdk");

var handlers = {
    'LaunchRequest': function() {
        this.emit("LaunchIntent");
    },

    "LaunchIntent": function() {
        //what alexa says when you start up the app
         this.emit(":ask", "Welcome to Ask the Stack! Using the all-knowing" +
        "Stack Overflow, I can give you a brief overview of a programming" +
        "language. Which language would you like to learn about?");
    },

    "SearchIntent": function() {
        var language = this.event.request.intent.slots.languages.value; //get what language the user said


        //alexa says a sumamry for the language specified by the user
        if (language === "java") {
            this.emit(":tell", "Java is a high-level, platform-independent," +
            "object-oriented programming language and runtime environment." + 
            "The Java language derives much of its syntax from C and C++, but " + 
            "its object model is simpler than that of the latter and it has " + 
            "fewer low-level facilities. Java applications are typically " + 
            "compiled to bytecode (called class files) that can be executed by " + 
            "a JVM (Java Virtual Machine), independent of computer architecture." +
            "Java's typing discipline is static, strong, safe, nominative, " +
            "and manifest.");
        }
        else if (language === "python") {
            this.emit(":tell", "Python is an interpreted, object-oriented, "+
            "high-level programming language with dynamic semantics. Its "+
            "high-level built in data structures, combined with dynamic typing "+
            "and dynamic binding, make it very attractive for Rapid Application "+
            "Development, as well as for use as a scripting or glue language to "+
            "connect existing components together. Python's simple, easy to "+
            "learn syntax emphasizes readability and therefore reduces the cost "+
            "of program maintenance. Python supports modules and packages, which "+
            "encourages program modularity and code reuse. The Python interpreter "+
            "and the extensive standard library are available in source or binary "+
            "form without charge for all major platforms, and can be freely "+
            "distributed.");
        }
        else if (language === "HTML") {
            this.emit(":tell", "H T M L is a computer language devised to allow "+
            "website creation. These websites can then be viewed by anyone else "+
            "connected to the Internet. It is relatively easy to learn, with the "+
            "basics being accessible to most people in one sitting; and quite "+
            "powerful in what it allows you to create. It is constantly undergoing "+
            "revision and evolution to meet the demands and requirements of the "+
            "growing Internet audience under the direction of the World Wide Web "+
            "Consortium, the organisation charged with designing and maintaining "+
            "the language");
        }
        else if (language === "PHP") {
            this.emit(":tell", "P H P is a dynamic and interactive server-side, "+
            "object-oriented, open source scripting language. P H P stands for "+
            "Hypertext Preprocessor. P H P is a language used to develop "+
            "interactive and dynamic content on the web and it is often used "+
            "together with the Apache web server. It can also be used with "+
            "Microsoft's I I S  web server.");
        }
        else if (language === "fortran") {
            this.emit(":tell", "Fortran, as derived from Formula Translating "+
            "System, is a general-purpose, imperative programming language. "+
            "It is used for numeric and scientific computing. Fortran was "+
            "originally developed by IBM in the 1950s for scientific and "+
            "engineering applications. Fortran ruled this programming area for "+
            "a long time and became very popular for high performance computing");
        }
        else if (language === "swift") {
            this.emit(":tell", "Swift is a fantastic way to write software, "+
            "whether it’s for phones, desktops, servers, or anything else that "+
            "runs code. It’s a safe, fast, and interactive programming language "+
            "that combines the best in modern language thinking with wisdom "+
            "from the wider Apple engineering culture and the diverse "+
            "contributions from its open-source community. The compiler is "+
            "optimized for performance and the language is optimized for "+
            "development, without compromising on either. Swift is friendly to "+
            "new programmers. It’s an industrial-quality programming language "+
            "that’s as expressive and enjoyable as a scripting language. "+
            "Writing Swift code in a playground lets you experiment with code "+
            "and see the results immediately, without the overhead of building "+
            "and running an app.");
        }
        else if (language === "lisp") {
            this.emit(":tell", "LISP, an acronym for list processing, is a "+
            "programming language that was designed for easy manipulation of "+
            "data strings. Developed in 1959 by John McCarthy, it is a commonly "+
            "used language for artificial intelligence programming. It is one of "+
            "the oldest programming languages still in relatively wide use.");
        }
        else if (language === "SQL" || language === "sequel") {
            this.emit(":tell", "S Q L stands for Structured Query Language. S Q L is used to "+
            "communicate with a database. According to ANSI (American National "+
            "Standards Institute), it is the standard language for relational "+
            "database management systems. SQL statements are used to perform "+
            "tasks such as update data on a database, or retrieve data from a "+
            "database. Some common relational database management systems that "+
            "use SQL are: Oracle, Sybase, Microsoft SQL Server, Access, Ingres, "+
            "etc. Although most database systems use SQL, most of them also "+
            "have their own additional proprietary extensions that are usually "+
            "only used on their system.");
        }
        else {
            this.emit(":tell", "Sorry, I don't know what you mean by " + language);
        }
    }
};

//main function
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
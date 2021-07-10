(function(){

    if (typeof jQuery === "undefined" ) { alert("jQuery does not seem to be loaded!"); }
    const Book = (nam, auth, y) => {
        let name = nam;
        let author = auth;
        let year = y;
        function print(){
            console.log(name);
        }
        function show(showcase){
            let newBook = document.createElement('div');
            newBook.innerHTML = "<h2>" + name + "</h2><p>" + author + "</p><p>" + year + "</p>"
            newBook.classList.add("bookclass");
            showcase.appendChild(newBook);
        }
        return {print, show};
    }

    const Library = (() => {
        let bookShowcase = document.getElementById("bot");
        let books = [];
        function clearShowcase() {
            bookShowcase.innerHTML = "";
        }
        function addBook(book) {
            books.push(book);
        }
        function printBooks(){
            for(let i = 0; i < books.length; i++) {
                books[i].print();
            }
        }
        function showBooks(){
            clearShowcase();
            for(let i = 0; i < books.length; i++) {
                books[i].show(bookShowcase);
            }
        }
        return {addBook, printBooks, showBooks};
    })

    const Controller = (() => {
        let library = Library();

        $("#addbook").click(function(){
            $("#bookform").fadeIn();
        })

        $("#canceladd").click(function(){
            $("#bookform").fadeOut();
        })

        library.addBook(Book("Harry Potter och de vises sten", "J.K. Rowling", "2001"));

        library.printBooks();
        library.showBooks();
    })();

})();
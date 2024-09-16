            
            
            
            
            
            let name = "Arnav"
            console.log(name)
            

            function createProfileMessage (name, age,isAvaliable){
                if (typeof(name) != "string"){
                    return "Error: Enter in a valid name";
                }
                else if(name.length == 0){
                    return "Error: The name must not be empty"
                }
                else if (typeof(age) != "number" || age <= 0){
                    return "Error: Enter in a valid age";
                }
        

                return `Name is ${name}. Age is ${age}.  Availble: ${isAvaliable ? "Yes" : "No"}`;   
                
                
            }

            let number = 19;

            for (let i = 0; i < 5; i++){
                console.log(createProfileMessage("Arnav",number,true));
                number++;
            }

            let ages = [10,20,30,40]

            
            

            ages.forEach( (element) => {console.log(element)});




            const profiles = [
            {name: "Arnav", age: 19, isAvailable: true} , 
            {name: "Alice", age: 30, isAvailable: true},  
            {name: "", age: 25, isAvailable: false}, 
            {name: "Bob", age: 18, isAvailable: false}
        ]

            profiles.forEach( (element) => console.log(createProfileMessage(element.name,element.age,element.isAvailable)) )



            const newArray = ages.map( (age) => { return age * 2 } )

            console.log(newArray)

            const legalAges = ages.filter((age) => {
                return age >= 21;
            })

            console.log(legalAges)

            const agesSum = ages.reduce((accumulator,age) => {
                return accumulator + age;
            }, 0)

            console.log(agesSum)

            let colors = [];

            colors.push("blue","red");

            console.log(colors.pop())

            const user = {name: "Arnav", job: "Doctor", favoriteColor: "blue"};

            const words = ["cat", "elephant", "dog", "bird", "fish"];

            const longWords = words.filter((word) => {
                return word.length > 3
            })

            const prices = [100,200,300];


            const discountedPrices = prices.map((price) => {
                return price - (price *  0.10)
            });
            
            const numbers = [1,2,3,4,5]

            const total = numbers.reduce((accumulator, number) => {
                return accumulator + number
            }, 0);

            const people = [
            { name: "John", age: 16 },
            { name: "Jane", age: 22 },
            { name: "Jack", age: 17 }
            ];

            const adult = people.find((legal) => {
                return legal.age > 18
            })

            if (!adult) {
                console.log("There are no adults present")
            }

            const inventory = {
            apples: 10,
            oranges: 2,
            bananas: 5,
            grapes: 3,
            pears: 0
            };

            console.log(Object.keys(inventory))
            console.log(Object.values(inventory))
            console.log(inventory)


            const lowStockItems = Object.keys(inventory).filter((fruits) => {
                return inventory[fruits] < 5
            })

            function myFunction(){
                
                const body = document.body;
                body.classList.toggle("dark-theme") 
                body.classList.toggle("light-theme")
                console.log(body.classList)
                if(body.classList.contains("light-theme")){
                    
                    document.getElementById("clicker").textContent = "Light Theme"
                }
                else{
                    document.getElementById("clicker").textContent = "Dark Theme"
                }

            }

            const button = document.getElementById("clicker")
            button.addEventListener("click",myFunction)

            function update(){
                let commentInput = document.getElementById("comment-input")
                let input = commentInput.value
                const newComment = document.createElement( "p" )
                newComment.classList.add("comment-text")
                newComment.textContent = input
    
                const commentSection = document.getElementById("comments")
                
                
                
                commentInput.value = ""   
                
                const commentContainer = document.createElement("div")
                commentContainer.classList.add("comment")
                const deleteComment = document.createElement("span")
                deleteComment.classList.add("span")
                deleteComment.textContent = "X|"
                deleteComment.addEventListener("click",handleDelete)

                commentContainer.appendChild(deleteComment)
                commentContainer.appendChild(newComment)

                commentSection.appendChild(commentContainer)

            }

            
            
            const submitButton = document.getElementById("submit")
            submitButton.addEventListener("click",update)

            function handleDelete(event){
            
                const deleteParent = event.target.parentElement

                deleteParent.remove()

            }





            

            




            
           


            
            
          
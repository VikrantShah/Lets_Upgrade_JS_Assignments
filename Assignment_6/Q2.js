class User
{
    constructor(name, age, email)
    {
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0;
        this.courses = [];
    }

    logIn()
    {
        console.log(`${this.name} have logged in.`);
    }

    logOut()
    {
        console.log(`${this.name} have logged out.`);
    }
}

class Moderator extends User
{
    constructor(name, age, email)
    {
        super(name, age, email);
    }

    addCoins(user)
    {
        let coin = parseInt(prompt("Enter the coins to be added."));

        if(coin > 0)
        {
            user.coins += coin;
        }

        console.log(user);
        return user;
    }

    removeCoins(user)
    {
        let coin = parseInt(prompt("Enter the coins to be removed."));

        if(user.coins > 0)
        {
            user.coins -= coin;
            if(user.coins < 0)
            {
                user.coins = 0;
            }
        }

        console.log(user);
        return user;
    }
}

class Admin extends Moderator
{
    constructor(name, age, email)
    {
        super(name, age, email);
    }

    addCourses(user, course)
    {
        user.courses.push(course);

        console.log(user);
        return user;
    }

    removeCourse(user, course)
    {
        user.courses = user.courses.filter(element => element != course);

        console.log(user);
        return user;
    }
}


let user1 = new User("Vikrant", 20, "vikrantshah2000@gmail.com");
user1.logIn();
user1.logOut();


let moderator1 = new Moderator("Dilip", 22, "dilip@gmail.com");
moderator1.logIn();
user1 = moderator1.addCoins(user1);
user1 = moderator1.removeCoins(user1);
moderator1.logOut();


let admin1 = new Admin("Milip", 25, "milip@gmail.com");
admin1.logIn();
user1 = admin1.addCourses(user1, "Python");
user1 = admin1.addCourses(user1, "JavaScript");
user1 = admin1.removeCourse(user1, "Python");
admin1.logOut();
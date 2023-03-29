
function pangrams(s){
    s = s.toLowerCase().replace(/[^a-z]/g, ' ');
    const  alphabet = new Set(s.split(' '));
    return alphabet.size === 26 ? 'pangram'  : 'not pangram';
    }
 

    // first line example : "Hello! How are you?" in to "hello how are you"
    // second line example : "hello how are you" in to {"hello", "how", "are", "you"}let a = 
   
    // let a = "hello world"
    // let split1 = a.split(" ");
    // console.log(split1);
    // let join1 = split1.join("");
    // console.log(join1);
    // let split2 = join1.split("");
    // console.log(split2);

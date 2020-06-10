let isPasswordValid = function(password){
    if (password.length <= 8 || password.includes('password')){
        return false 
    }
    else if (password.length > 8 && !password.includes('password')){
        return true 
    }else {
        return 'Something gone wrong'
    }
}
console.log(isPasswordValid('asdfp'))
console.log(isPasswordValid('abcsdadsdas121231312'))
console.log(isPasswordValid('asdsadqpasswordasdq23'))

let isPassValid = function(password){//It's even better!
    return password.length > 8 && !password.includes('password')
}
function RouteName(Name){
 console.log(Name)
 if(Name === '/'){
    return 'Home'
 } else if(Name.includes('application')){
    return 'Application'
 } else if(Name === '/Benefits'){
    return 'Benefits'
 }else if(Name === '/privacy'){
    return 'Privacy'
 }else if(Name === '/faq'){
    return 'FAQ'
 }else if(Name === '/available-positions'){
    return 'Available positions'
 }else if(Name.includes('/available-positions/')){
    return 'Available position'
 }else{
    return '404'
 }
    
}

export default RouteName;

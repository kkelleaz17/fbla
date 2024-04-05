// Function to determine the route name based on the provided path
function RouteName(Name){
   // If the path is the root path, return 'Home'
   if(Name === '/'){
       return 'Home';
   } 
   // If the path includes 'application', return 'Application'
   else if(Name.includes('application')){
       return 'Application';
   } 
   // If the path is '/Benefits', return 'Benefits'
   else if(Name === '/Benefits'){
       return 'Benefits';
   }
   // If the path is '/privacy', return 'Privacy'
   else if(Name === '/privacy'){
       return 'Privacy';
   }
   // If the path is '/faq', return 'FAQ'
   else if(Name === '/faq'){
       return 'FAQ';
   }
   // If the path is '/available-positions', return 'Available positions'
   else if(Name === '/available-positions'){
       return 'Available positions';
   }
   // If the path includes '/available-positions/', return 'Available position'
   else if(Name.includes('/available-positions/')){
       return 'Available position';
   }
   // If the path includes '/ThankYou', return 'Thank You'
   else if(Name.includes('/ThankYou')){
       return 'Thank You';
   }
   // If none of the above conditions are met, return '404' for Page Not Found
   else{
       return '404';
   }
}

// Export the RouteName function
export default RouteName;


// Test du service admin (pour vérification)
import { AdminService } from './admin-service';

// Test de base pour vérifier que le service fonctionne
console.log('AdminService test:');
console.log('AdminService class:', typeof AdminService);
console.log('getSeasonPricing method:', typeof AdminService.getSeasonPricing);
console.log('getSpecialPricing method:', typeof AdminService.getSpecialPricing);
console.log('getBlockedDates method:', typeof AdminService.getBlockedDates);

export {};



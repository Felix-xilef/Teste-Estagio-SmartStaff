import { RegistryController } from "./controllers/RegistryControll";
import { Router } from "express";

const router = Router();

const registryController = new RegistryController();

router.post('/registry', registryController.insertUpdate);
router.put('/registry', registryController.insertUpdate);
router.delete('/registry', registryController.delete);
router.get('/registry', registryController.select);
router.get('/registries', registryController.selectAll);

export default router;
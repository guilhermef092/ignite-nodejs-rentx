import { ICreateCarDTO } from '../dto/ICreateCarDTO';
import { Car } from '../infra/typeorm/entities/Car';

interface ICarsRepository {
  create(date: ICreateCarDTO): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  findAvailable(
    brand?: string,
    category_id?: string,
    name?: string,
  ): Promise<Car[]>;
  findById(id: string): Promise<Car>;
}

export { ICarsRepository };

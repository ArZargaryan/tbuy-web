import { HomeDataRepository } from "@features/home/data/repository/home_data_repository";
import { ApiHomeModule } from "@features/home/internal/api_home_module";

export class HomeDataRepositoryModule {
  private static homeDataRepositoryVar: HomeDataRepository | null;

  static homeDataRepository(): HomeDataRepository {
    if (!this.homeDataRepositoryVar) {
      this.homeDataRepositoryVar = new HomeDataRepository({ apiUtil: ApiHomeModule.apiUtil() });
    }

    return this.homeDataRepositoryVar;
  }
}

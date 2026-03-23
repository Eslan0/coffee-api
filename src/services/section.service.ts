import Section from "../models/section.model";

class SectionService {
  // Busca todas as seções
  async getAllSections() {
    const sections = await Section.find();
    return sections;
  }

  // Cria uma nova seção
  async createSection(data: any) {
    const section = await Section.create(data);
    return section;
  }

  // Atualiza uma seção existente
  async updateSection(id: string, data: any) {
    const section = await Section.findByIdAndUpdate(id, data, { new: true });
    return section;
  }

  // Exclui uma seção existente
  async deleteSection(id: string) {
    const section = await Section.findByIdAndDelete(id);
    return section;
  }
}

export default new SectionService();

import Section from "../models/section.model";

class SectionService {
  // list all sections
  async getAllSections() {
    const sections = await Section.find();
    return sections;
  }

  // create a new section
  async createSection(data: any) {
    const section = await Section.create(data);
    return section;
  }

  // update an existing section
  async updateSection(id: string, data: any) {
    const section = await Section.findByIdAndUpdate(id, data, { new: true });
    return section;
  }

  // delete an existing section
  async deleteSection(id: string) {
    const section = await Section.findByIdAndDelete(id);
    return section;
  }
}

export default new SectionService();

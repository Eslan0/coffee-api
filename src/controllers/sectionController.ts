import { Context } from "koa";
import sectionService from "../services/sectionService";

class SectionController {
  // GET /sections - Section list
  async index(ctx: Context) {
    try {
      const sections = await sectionService.getAllSections();
      ctx.body = sections;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Erro ao buscar seções" };
    }
  }

  // POST /sections - Create a new section
  async create(ctx: Context) {
    try {
      const sectionData = ctx.request.body;
      const newSection = await sectionService.createSection(sectionData);

      ctx.body = newSection;
    } catch (error) {
      ctx.status = 400; // Validation error or malformed data
      ctx.body = { message: "Erro ao criar seção", error };
    }
  }

  // PUT /sections/:id - Update an existing section
  async update(ctx: Context) {
    try {
      const sectionId = ctx.params.id;
      const sectionData = ctx.request.body;
      const updatedSection = await sectionService.updateSection(sectionId, sectionData);

      ctx.body = updatedSection;
    } catch (error) {
      ctx.status = 400; // Validation error or malformed data
      ctx.body = { message: "Erro ao atualizar seção", error };
    }
  }

  // DELETE /sections/:id - Delete an existing section
  async delete(ctx: Context) {
    try {
      const sectionId = ctx.params.id;
      const deletedSection = await sectionService.deleteSection(sectionId);

      ctx.body = deletedSection;
    } catch (error) {
      ctx.status = 400; // Validation error or malformed data
      ctx.body = { message: "Erro ao excluir seção", error };
    }
  }
}

export default new SectionController();

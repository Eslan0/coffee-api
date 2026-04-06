import { Context } from "koa";
import sectionService from "../services/section.service";

class SectionController {
  // get /sections - section list
  async index(ctx: Context) {
    try {
      const sections = await sectionService.getAllSections();
      ctx.body = sections;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Error retrieving sections" };
    }
  }

  // post /sections - create a new section
  async create(ctx: Context) {
    try {
      const sectionData = ctx.request.body;
      const newSection = await sectionService.createSection(sectionData);

      ctx.body = newSection;
    } catch (error) {
      ctx.status = 400; // validation error or malformed data
      ctx.body = { message: "Error creating section", error };
    }
  }

  // put /sections/:id - update an existing section
  async update(ctx: Context) {
    try {
      const sectionId = ctx.params.id;
      const sectionData = ctx.request.body;
      const updatedSection = await sectionService.updateSection(sectionId, sectionData);

      ctx.body = updatedSection;
    } catch (error) {
      ctx.status = 400;
      ctx.body = { message: "Error updating section", error };
    }
  }

  // delete /sections/:id - delete an existing section
  async delete(ctx: Context) {
    try {
      const sectionId = ctx.params.id;
      const deletedSection = await sectionService.deleteSection(sectionId);

      ctx.body = deletedSection;
    } catch (error) {
      ctx.status = 400;
      ctx.body = { message: "Error deleting section", error };
    }
  }
}

export default new SectionController();

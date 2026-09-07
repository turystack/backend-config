export class OrderController {
  async list(@AuthenticatedProfile() profile: IamProfile) {
    return profile.organizationId
  }
}

import RedisStorage from "@/lib/utils/redis/RedisStorage";
import {Character} from "@/lib/Character/types";

export default class CharacterRepository {
  private storage!: RedisStorage
  userId: number

  constructor(userId: number) {
    this.storage = new RedisStorage();
    this.userId = userId
  }

  async loadCharacterData() {
    const data = await this.storage.load(`character:${this.userId}`)
    return data || null;
  }

  async dump(characterData: Character) {
    await this.storage.dump(`character:${this.userId}`, characterData)
  }

  async update(data: Partial<Character>) {
    await this.storage.update(`character:${this.userId}`, data)
  }
}

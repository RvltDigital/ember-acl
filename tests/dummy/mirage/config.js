import { dasherize } from '@ember/string';

export default function()
{
    for (let name of Object.keys(this._config.fixtures)) {
        name = dasherize(name);
        this.get(`/${name}/:id`);
        this.get(`/${name}`, { coalesce: true });
        this.post(`/${name}`);
        this.patch(`/${name}/:id`);
        this.delete(`/${name}/:id`);
    }
}

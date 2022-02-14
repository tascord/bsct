import Gun from "gun";
import 'gun/sea';
import 'gun/axe';

export const db = Gun();
export const user = db.user().recall({ sessionStorage: true });

export const field = async (name: string, setter: (value: string) => void) => {
    user.get(name).on(setter);
}


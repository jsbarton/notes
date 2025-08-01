import { Storage } from "aws-amplify";

export async function s3Upload(file: File) {
  const filename = `${Date.now()}-${file.name}`;

  // Public upload: Storage.put()
  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;
}
